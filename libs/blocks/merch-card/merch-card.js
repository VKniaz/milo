/* eslint-disable prefer-destructuring */
import { decorateButtons, decorateBlockHrs } from '../../utils/decorate.js';
import { getConfig, createTag } from '../../utils/utils.js';
import { decorateLinkAnalytics } from '../../martech/attributes.js';
import { replaceKey } from '../../features/placeholders.js';
import '../../deps/commerce.js';
import '../../deps/merch-card.js';

const cardTypes = ['segment', 'special-offers', 'plans', 'catalog'];

const textStyles = {
  H5: 'detail-m',
  H4: 'body-xxs',
  H3: 'heading-xs',
  H2: 'heading-m',
  H1: 'heading-l',
};

const getPodType = (styles) => styles?.find((style) => cardTypes.includes(style));

export const decorateBgContent = (el) => {
  const els = el.querySelectorAll('p');
  let insidePattern = false;
  let decoratedBlock;
  let style;
  [...els].forEach((e) => {
    if (e.textContent.startsWith('/--')) {
      insidePattern = true;
      decoratedBlock = createTag('div', { slot: 'detail-bg' });
      style = e.textContent.substring(3).trim();
      e.remove();
      return;
    }
    if (e.textContent.includes('--/')) {
      insidePattern = false;
      e.remove();
      return;
    }
    if (insidePattern) {
      decoratedBlock.appendChild(e);
    }
  });
  return { style, decoratedBlock };
};

const checkBoxLabel = (ctas, altCtaMetaData) => {
  const altCtaRegex = /href=".*"/;
  if (!altCtaRegex.test(altCtaMetaData[1]?.innerHTML)) return null;
  const allButtons = ctas.querySelectorAll('a');
  const originalCtaButton = allButtons[allButtons.length - 1];
  const altCtaButtonData = altCtaMetaData[1];
  const altCtaButton = createTag('a', { class: [...originalCtaButton.classList, 'alt-cta', 'button--inactive'].join(' ') }, altCtaButtonData.textContent);
  originalCtaButton.classList.add('active');
  decorateButtons(altCtaButton);
  ctas.appendChild(altCtaButton);
  return altCtaMetaData[0].textContent;
};

const isHeadingTag = (tagName) => /^H[1-5]$/.test(tagName);
const isParagraphTag = (tagName) => tagName === 'P';
const isListTag = (tagName) => tagName === 'UL';

const createAndAppendTag = (tagName, attributes, content, parent) => {
  const newElement = createTag(tagName, attributes, content);
  parent.append(newElement);
  return newElement;
};

const parseContent = (el, altCta, cardType, merchCard) => {
  const innerElements = [...el.querySelectorAll('h1, h2, h3, h4, h5, h6, p, ul')];
  const bodySlot = createTag('div', { slot: 'body-xs' });

  innerElements.forEach((element) => {
    const { tagName } = element;
    if (isHeadingTag(tagName)) {
      createAndAppendTag(tagName, { slot: textStyles[tagName] }, element.innerHTML, merchCard);
      return;
    } if (isParagraphTag(tagName)) {
      bodySlot.append(element);
      return;
    }

    if (isListTag(tagName)) {
      const lastChildOfBody = bodySlot.lastElementChild;
      if (lastChildOfBody) {
        bodySlot.removeChild(lastChildOfBody);
        element.prepend(lastChildOfBody);
      }
      createAndAppendTag('div', { slot: 'list' }, element, merchCard);
    }
  });
  merchCard.append(bodySlot);
};

const returnRibbonStyle = (ribbonMetadata) => {
  const ribbonStyleRegex = /^#[0-9a-fA-F]+, #[0-9a-fA-F]+$/;
  if (!ribbonStyleRegex.test(ribbonMetadata[0]?.innerText)) return null;
  const style = ribbonMetadata[0].innerText;
  const badgeBackgroundColor = style.split(',')[0].trim();
  const badgeColor = style.split(',')[1].trim();
  const ribbonWrapper = ribbonMetadata[0].parentNode;
  const badgeText = ribbonMetadata[1].innerText;
  ribbonWrapper.remove();
  return { badgeBackgroundColor, badgeColor, badgeText };
};

const getActionMenuContent = (el, ribbonMetadata) => {
  const index = (ribbonMetadata !== null) ? 1 : 0;
  const expectedChildren = (ribbonMetadata !== null) ? 3 : 2;
  if (el.childElementCount !== expectedChildren) {
    return null;
  }
  const actionMenuContentWrapper = el.children[index];
  const actionMenuContent = actionMenuContentWrapper.children[0];
  actionMenuContentWrapper.remove();
  return actionMenuContent;
};

function getMerchCardRows(rows, ribbonMetadata, cardType, actionMenuContent) {
  if (cardType === 'catalog') {
    const index = ribbonMetadata === null ? 0 : 1;
    return actionMenuContent !== null ? rows[index + 1] : rows[index];
  }
  return rows[ribbonMetadata === null ? 0 : 1];
}

const init = (el) => {
  let section = el.closest('.section');
  if (section.parentElement.classList.contains('fragment')) {
    section.style.display = 'contents';
    const fragment = section.parentElement;
    fragment.style.display = 'contents';
    const fragmentParent = fragment.parentElement;
    fragmentParent.style.display = 'contents';
    const parentSection = fragmentParent.parentElement;
    section = parentSection;
  }
  section.classList.add('merch-card-collection');
  const headings = el.querySelectorAll('h1, h2, h3, h4, h5, h6');
  decorateLinkAnalytics(el, headings);
  const images = el.querySelectorAll('picture');
  let image;
  const icons = [];
  const rows = el.querySelectorAll(':scope > *');
  const styles = [...el.classList];
  const cardType = getPodType(styles);
  const ribbonMetadata = rows[0].children?.length === 2 ? rows[0].children : null;
  const actionMenuContent = cardType === 'catalog' ? getActionMenuContent(el, ribbonMetadata) : null;
  const row = getMerchCardRows(rows, ribbonMetadata, cardType, actionMenuContent);
  const altCta = rows[rows.length - 1].children?.length === 2
    ? rows[rows.length - 1].children : null;
  const allPElems = row.querySelectorAll('p');
  const ctas = allPElems[allPElems.length - 1];
  images.forEach((img) => {
    const imgNode = img.querySelector('img');
    const { width, height } = imgNode;
    const isSquare = Math.abs(width - height) <= 10;
    if (img) {
      if (isSquare) {
        icons.push(img);
      } else {
        image = img;
      }
    }
  });

  const merchCard = createTag('merch-card', { class: el.className, variant: cardType });
  if (ribbonMetadata !== null) {
    const badge = returnRibbonStyle(ribbonMetadata);
    if (badge !== null) {
      merchCard.setAttribute('badge-background-color', badge.badgeBackgroundColor);
      merchCard.setAttribute('badge-color', badge.badgeColor);
      merchCard.setAttribute('badge-text', badge.badgeText);
    }
  }
  if (actionMenuContent !== null) {
    merchCard.setAttribute('action-menu', true);
    merchCard.append(createTag('div', { slot: 'action-menu-content' }, actionMenuContent.innerHTML));
  }
  if (ctas) {
    const footer = createTag('div', { slot: 'footer' });
    decorateButtons(ctas);
    footer.append(ctas);
    merchCard.appendChild(footer);
  }
  if (image !== undefined) {
    merchCard.setAttribute('image', image.querySelector('img').src);
    image.remove();
  }
  if (!icons || icons.length > 0) {
    const iconImgs = Array.from(icons).map((icon) => {
      const img = {
        src: icon.querySelector('img').src,
        alt: icon.querySelector('img').alt,
      };
      return img;
    });
    merchCard.setAttribute('icons', JSON.stringify(Array.from(iconImgs)));
    icons.forEach((icon) => icon.remove());
  }
  if (styles.includes('secure')) {
    replaceKey('secure-transaction', getConfig())
      .then((key) => merchCard.setAttribute('secure-label', key));
  }
  if (altCta) {
    const label = checkBoxLabel(ctas, altCta);
    if (label !== null) {
      merchCard.setAttribute('checkbox-label', label);
    }
  }
  if (styles.includes('evergreen')) {
    const decoratedContent = decorateBgContent(el);
    merchCard.setAttribute('evergreen', true);
    merchCard.setAttribute('detailBg', decoratedContent.style);
    merchCard.append(decoratedContent.decoratedBlock);
  }
  parseContent(el, altCta, cardType, merchCard);
  decorateBlockHrs(merchCard);
  el.replaceWith(merchCard);
};

export default init;
