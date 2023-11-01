// Wed, 01 Nov 2023 05:57:46 GMT
import{html as t,LitElement as x}from"./lit-all.min.js";import{css as p,unsafeCSS as l}from"./lit-all.min.js";var c="(min-width: 900px)",i="(min-width: 1280px)",h="(min-width: 1440px)";var m=p`
    :host {
        position: relative;
        display: flex;
        flex-direction: column;
        min-height: 222px;
        height: 100%;
        flex: 1 1 0;
        text-align: left;
        border-radius: var(--consonant-merch-spacing-xxxs);
        background-color: var(--consonant-merch-card-background-color);
        overflow: auto;
        grid-template-columns: repeat(auto-fit, minmax(300px, max-content));
        background-color: var(--consonant-merch-card-background-color);
        font-family: var(--body-font-family, 'Adobe Clean');
        border-radius: var(--consonant-merch-spacing-xs);
        border: 1px solid var(--consonant-merch-card-border-color);
    }

    .invisible {
        visibility: hidden;
    }

    :host(:hover) .invisible {
        visibility: visible;
    }

    slot {
        display: block;
    }

    .top-section {
        display: flex;
        justify-content: flex-start;
        height: 100%;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .icons {
        display: flex;
        width: fit-content;
        fle-direction: row;
    }

    .icons img {
        width: var(--consonant-merch-card-plans-icon-size);
        height: var(--consonant-merch-card-plans-icon-size);
        margin-right: var(--consonant-merch-spacing-xxs);
    }

    .body {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        height: 100%;
        flex-direction: column;
        gap: var(--consonant-merch-spacing-xxs);
        padding: var(--consonant-merch-spacing-xs);
    }

    ::slotted([slot='footer']) {
        display: flex;
        justify-content: flex-end;
        margin-top: auto;
        box-sizing: border-box;
        align-self: flex-end;
        width: 100%;
        padding: var(--consonant-merch-spacing-xs);
    }

    hr {
        background-color: var(--color-gray-200);
        border: none;
        height: 1px;
        width: auto;
        margin-top: 0;
        margin-bottom: 0;
        margin-left: var(--consonant-merch-spacing-xs);
        margin-right: var(--consonant-merch-spacing-xs);
    }

    div[class$='-ribbon'] {
        position: absolute;
        top: 16px;
        right: 0;
        font-size: var(--type-heading-xxs-size);
        font-weight: 500;
        max-width: 150px;
        line-height: 16px;
        text-align: center;
        padding: 8px 11px;
        border-radius: 5px 0 0 5px;
    }

    .body .catalog-ribbon {
        display: flex;
        height: fit-content;
        flex-direction: column;
        width: fit-content;
        border-radius: 5px;
        position: relative;
        top: 0;
        margin-left: var(--consonant-merch-spacing-xxs);
    }

    .image {
        flex-grow: 1;
        position: relative;
        width: 100%;
        min-height: var(--consonant-merch-card-image-height);
        max-height: var(--consonant-merch-card-image-height);
        background-color: var(--background-color);
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .detail-bg-container {
        right: 0;
        padding: var(--consonant-merch-spacing-xs);
        border-radius: 5px;
        font-size: var(--consonant-merch-card-body-font-size);
        margin: var(--consonant-merch-spacing-xs);
    }

    .action-menu {
        display: flex;
        width: 32px;
        height: 32px;
        position: absolute;
        top: 16px;
        right: 16px;
        background: url('../src/img/ellipsis.svg') no-repeat center center,
            #f6f6f6;
        background-size: 16px 16px;
    }
    .hidden {
        visibility: hidden;
    }

    .standard-wrapper {
        display: flex;
        flex-wrap: wrap;
        gap: var(--spacing-xs);
        align-items: center;
        justify-content: space-between;
    }

    .checkbox-label,
    .secure-transaction-label {
        font-size: var(--consonant-merch-card-body-xxs-font-size);
        line-height: 1.3;
        color: var(--color-gray-600);
    }

    .secure-transaction-label {
        white-space: nowrap;
    }

    .secure-transaction-icon {
        height: 15px;
        width: 12px;
        right: 16px;
        background-image: url('../src/img/secure-transaction.svg');
        background-repeat: no-repeat;
    }

    .checkbox-container,
    .secure-transaction-wrapper {
        display: flex;
        align-items: center;
        gap: var(--consonant-merch-spacing-xxs);
    }

    .secure-transaction-wrapper {
        padding-left: var(--consonant-merch-spacing-xs);
    }

    .checkbox-container input[type='checkbox']:checked + .checkmark {
        background-color: var(--color-accent);
        background-image: url('../src/img/checkmark-white-small.svg');
        border-color: var(--color-accent);
    }

    .checkbox-container input[type='checkbox'] {
        display: none;
    }

    .checkbox-container .checkmark {
        position: relative;
        display: inline-block;
        width: 12px;
        height: 12px;
        border: 2px solid #757575;
        background: #fff;
        border-radius: 2px;
        cursor: pointer;
        margin-top: 2px;
    }

    :host([type='super-wide']) {
        grid-column: span 4;
    }

    :host([type='wide']) {
        grid-column: span 2;
    }

    :host([variant='special-offers']) {
        min-height: 438px;
    }

    :host([variant='special-offers'][type='wide']) {
        width: calc(var(--consonant-merch-card-special-offer-width) * 2)
        min-height: 438px;
    }

    :host([variant='special-offers'][type='super-wide']) {
        width: calc(var(--consonant-merch-card-special-offer-width) * 4);
        min-height: 438px;
    }

    /* Tablet */
    @media screen and ${l(c)} {
    }

    /* Laptop */
    @media screen and ${l(i)} {
    }
`;var g=document.createElement("style");g.innerHTML=`
:root {

    --consonant-merch-card-detail-font-size: 12px;
    --consonant-merch-card-detail-font-weight: 500;
    --consonant-merch-card-detail-letter-spacing: 0.8px;
    --consonant-merch-card-background-color: #fff;

    --consonant-merch-card-heading-font-size: 18px;
    --consonant-merch-card-heading-line-height: 22.5px;
    --consonant-merch-card-heading-secondary-font-size: 14px;
    --consonant-merch-card-body-font-size: 14px;
    --consonant-merch-card-body-line-height: 21px;

    /* spacing */
    --consonant-merch-spacing-xxxs: 4px;
    --consonant-merch-spacing-xxs: 8px;
    --consonant-merch-spacing-xs: 16px;
    --consonant-merch-spacing-s: 24px;
    --consonant-merch-spacing-m: 32px;

    /* headings */
    --consonant-merch-card-heading-xs-font-size: 18px;
    --consonant-merch-card-heading-xs-line-height: 22.5px;
    --consonant-merch-card-heading-s-font-size: 20px;
    --consonant-merch-card-heading-s-line-height: 25px;
    --consonant-merch-card-heading-m-font-size: 18px;
    --consonant-merch-card-heading-m-line-height: 27px;
    --consonant-merch-card-heading-l-font-size: 20px;
    --consonant-merch-card-heading-l-line-height: 30px;
    --consonant-merch-card-heading-xl-font-size: 36px;
    --consonant-merch-card-heading-xl-line-height: 45px;

    /* detail */
    --consonant-merch-card-detail-m-font-size: 12px;
    --consonant-merch-card-detail-m-line-height: 15px;
    --consonant-merch-card-detail-m-font-weight: 700;
    --consonant-merch-card-detail-m-letter-spacing: 1px;

    /* body */
    --consonant-merch-card-body-xxs-font-size: 12px;
    --consonant-merch-card-body-xxs-line-height: 18px;
    --consonant-merch-card-body-xs-font-size: 14px;
    --consonant-merch-card-body-xs-line-height: 21px;
    --consonant-merch-card-body-m-font-size: 18px;
    --consonant-merch-card-body-m-line-height: 27px;
    --consonant-merch-card-body-l-font-size: 20px;
    --consonant-merch-card-body-l-line-height: 30px;
    --consonant-merch-card-body-xl-font-size: 22px;
    --consonant-merch-card-body-xl-line-height: 33px;


    --consonant-merch-card-heading-padding: 0;
    --consonant-merch-card-image-height: 180px;

    /* colors */
    --consonant-merch-card-border-color: #eaeaea;
    --color-accent: #1473E6;
    --color-black: #000;

    /* merch card generic */
    --consonant-merch-card-max-width: 378px;

    /* special offers mobile */
    --consonant-merch-card-special-offer-width: 300px;

    /* segment */
    --consonant-merch-card-segment-max-width: 378px;

    /* plans */
    --consonant-merch-card-plans-max-width: 302px;
    --consonant-merch-card-plans-icon-size: 40px;

    /* catalog */
    --consonant-merch-card-catalog-max-width: 276px;
    --consonant-merch-card-catalog-icon-size: 40px;
}

.merch-cards-1,
.merch-cards-2,
.merch-cards-3,
.merch-cards-4 {
    display: grid;
    margin-bottom: var(--consonant-merch-spacing-m);
    justify-content: center;
    gap: var(--spacing-m);
    align-items: start;
    padding-left: var(--grid-margins-width);
    padding-right: var(--grid-margins-width);
    grid-template-columns: repeat(1, fit-content(100%));

}

/* Tablet */
@media screen and ${c} {
    :root {
        --consonant-merch-card-special-offer-width: 302px;
    }

    .merch-cards-2,
    .merch-cards-3,
    .merch-cards-4 {
        grid-template-columns: repeat(2, fit-content(100%));
    }
}

/* desktop */
@media screen and ${i} {
    :root {
        --consonant-merch-card-special-offer-width: 378px;
    }

    .merch-cards-3,
    .merch-cards-4 {
        grid-template-columns: repeat(3, fit-content(100%));
    }
}

/* Large desktop */
    @media screen and ${h} {
    :root {

    }

    .merch-cards-4 {
        grid-template-columns: repeat(4, fit-content(100%));
    }
}

.m-gap {
    gap: var(--consonant-merch-spacing-xs);
}

.l-gap {
    gap: var(--consonant-merch-spacing-s);
}

.xl-gap {
    gap: var(--consonant-merch-spacing-m);
}



div[class$='-badge'] {
    position: absolute;
    top: 16px;
    right: 0;
    font-size: var(--type-heading-xxs-size);
    font-weight: 500;
    max-width: 150px;
    line-height: 16px;
    text-align: center;
    padding: 8px 11px;
    border-radius: 5px 0 0 5px;
}

merch-card.background-opacity-70 {
    background-color: rgba(255 255 255 / 70%);
}

merch-card hr {
    background-color: var(--color-gray-200);
    border: none;
    height: 1px;
    width: 100%;
    margin-bottom: var(--consonant-merch-card-spacing-xs);
}

merch-card.has-divider hr {
    margin: var(--consonant-merch-card-spacing-xs) 0;
    margin-bottom: var(--spacing-xxs);
}

merch-card[variant="special-offers"] span[is="inline-price"][data-template="priceStrikethrough"] {
    font-size: var(--consonant-merch-card-body-xs-font-size);
}

merch-card[variant="segment"] {
    max-width: var(--consonant-merch-card-segment-max-width);
}

merch-card[variant="plans"] {
    max-width: var(--consonant-merch-card-plans-max-width);
}

merch-card[variant="catalog"] {
    max-width: var(--consonant-merch-card-catalog-max-width);
}

merch-card p, merch-card h3, merch-card h4 {
    margin: 0;
}

merch-card [is=inline-price] {
    display: inline-block;
}

merch-card [slot='heading-xs'] {
    font-size: var(--consonant-merch-card-heading-xs-font-size);
    line-height: var(--consonant-merch-card-heading-xs-line-height);
    margin: 0;
}

merch-card [slot='heading-s'] {
    font-size: var(--consonant-merch-card-heading-s-font-size);
    line-height: var(--consonant-merch-card-heading-s-line-height);
    margin: 0;
}

merch-card [slot='heading-m'] {
    font-size: var(--consonant-merch-card-heading-m-font-size);
    line-height: var(--consonant-merch-card-heading-m-line-height);
    margin: 0;
}

merch-card [slot='heading-l'] {
    font-size: var(--consonant-merch-card-heading-l-font-size);
    line-height: var(--consonant-merch-card-heading-l-line-height);
    margin: 0;
}

merch-card [slot='heading-xl'] {
    font-size: var(--consonant-merch-card-heading-xl-font-size);
    line-height: var(--consonant-merch-card-heading-xl-line-height);
    margin: 0;
}

merch-card [slot='detail-m'] {
    font-size: var(--consonant-merch-card-detail-m-font-size);
    letter-spacing: var(--consonant-merch-card-detail-m-letter-spacing);
    font-weight: var(--consonant-merch-card-detail-m-font-weight);
    text-transform: uppercase;
    margin: 0;
}

merch-card [slot="body-xxs"] {
    font-size: var(--consonant-merch-card-body-xxs-font-size);
    line-height: var(--consonant-merch-card-body-xxs-line-height);
}

merch-card [slot="body-xs"] {
    font-size: var(--consonant-merch-card-body-xs-font-size);
    line-height: var(--consonant-merch-card-body-xs-line-height);
}

merch-card [slot="body-m"] {
    font-size: var(--consonant-merch-card-body-m-font-size);
    line-height: var(--consonant-merch-card-body-m-line-height);
}

merch-card [slot="body-l"] {
    font-size: var(--consonant-merch-card-body-l-font-size);
    line-height: var(--consonant-merch-card-body-l-line-height);
}

merch-card [slot="body-xl"] {
    font-size: var(--consonant-merch-card-body-xl-font-size);
    line-height: var(--consonant-merch-card-body-xl-line-height);
}

merch-card[variant="special-offers"] [slot="list"] ul {
    padding-left: 0;
    padding-bottom: var(--consonant-merch-spacing-xxs);
    margin-top: 0;
    margin-bottom: 0;
    list-style-position: inside;
    list-style-type: '\u2022 ';
}

merch-card[variant="special-offers"] ul li {
    padding-left: 0;
    line-height: var(--consonant-merch-card-body-line-height);
    font-size: var(--consonant-merch-card-body-xxs-font-size);
}

merch-card[variant="special-offers"] ul li ::marker {
    margin-right: 0;
}

merch-card[variant="catalog"] [slot="action-menu-content"] {
    background-color: #000;
    color: #fff;
    font-size: var(--consonant-merch-card-body-xs-font-size);
    width: fit-content;
    padding: var(--consonant-merch-spacing-xs);
    border-radius: var(--consonant-merch-spacing-xxxs);
    position: absolute;
    top: 55px;
    right: 15px;
    line-height: var(--consonant-merch-card-body-line-height);
}

merch-card[variant="catalog"] [slot="action-menu-content"] ul {
    padding-left: 0;
    padding-bottom: var(--consonant-merch-spacing-xss);
    margin-top: 0;
    margin-bottom: 0;
    list-style-position: inside;
    list-style-type: '\u2022 ';
}

merch-card[variant="catalog"] [slot="action-menu-content"] ul li {
    padding-left: 0;
    line-height: var(--consonant-merch-card-body-line-height);
}

merch-card[variant="catalog"] [slot="action-menu-content"] ::marker {
    margin-right: 0;
}

merch-card[variant="catalog"] [slot="action-menu-content"] a {
    color: var(--consonant-merch-card-background-color);
    text-decoration: underline;
}

.button--inactive {
    display: none;
}

div[slot="footer"] a.con-button {
    margin-left: var(--consonant-merch-spacing-xs);
}
`;document.head.appendChild(g);var s=class extends x{static properties={name:{type:String},variant:{type:String},type:{type:String},badgeColor:{type:String,attribute:"badge-color"},badgeBackgroundColor:{type:String,attribute:"badge-background-color"},badgeText:{type:String,attribute:"badge-text"},icons:{type:Array},actionmenu:{type:Boolean,attribute:"action-menu"},actionMenuContent:{type:String,attribute:"action-menu-content"},title:{type:String},description:{type:String},image:{type:String,attribute:"image"},customHr:{type:String,attribute:"hr"},detailBg:{type:String,attribute:"detail-bg"},secureLabel:{type:String,attribute:"secure-label"},checkboxLabel:{type:String,attribute:"checkbox-label"},evergreen:{type:Boolean},filters:{type:String,reflect:!0,converter:{fromAttribute:e=>Object.fromEntries(e.split(",").map(n=>{let[a,o]=n.split(":"),r=Number(o);return[a,isNaN(r)?void 0:r]})),toAttribute:e=>Object.entries(e).map(([n,a])=>isNaN(a)?n:`${n}:${a}`).join(",")}},types:{type:String,attribute:"types",reflect:!0}};static styles=[m];constructor(){super(),this.filters={},this.types=""}updated(e){e.has("badgeBackgroundColor")&&(this.style.border=`1px solid ${this.badgeBackgroundColor}`)}renderIcons(){return this.icons&&this.icons.length>0?t`
                  <div class="icons">
                      ${this.icons.map(e=>t`<img src="${e.src}" alt="${e.alt}" />`)}
                  </div>
              `:""}createCheckBox(){return this.checkboxLabel?t`
                  <div class="checkbox-container">
                      <input id="alt-cta" type="checkbox" />
                      <span
                          class="checkmark"
                          @click="${this.toggleCheckBox}"
                      ></span>
                      <label class="checkbox-label"
                          >${this.checkboxLabel}</label
                      >
                  </div>
              `:""}createPlansFooter(){let e=t` <slot name="footer"></slot>`,n=this.secureLabel;return n?t` <div class="standard-wrapper">
                  <div class="secure-transaction-wrapper">
                      <span class="secure-transaction-icon"></span>
                      <span class="secure-transaction-label"
                          >${n}</span
                      >
                  </div>
                  ${e}
              </div>`:e}decorateRibbon(){let e;if(!(!this.badgeBackgroundColor||!this.badgeColor||!this.badgeText))return this.evergreen&&(e=`border: 1px solid ${this.badgeBackgroundColor}; border-right: none;`),t`
            <div
                class="${this.variant}-ribbon"
                style="background-color: ${this.badgeBackgroundColor}; color: ${this.badgeColor}; ${e?` ${e}`:""}"
            >
                ${this.badgeText}
            </div>
        `}toggleCheckBox(){let e=this.shadowRoot.querySelector("#alt-cta");e.checked=!e.checked;let n=this.shadowRoot.querySelector('slot[name="footer"]');if(n){let a=n.assignedNodes({flatten:!0}),o,r;a.forEach(d=>{r=d.querySelector(".alt-cta"),o=d.querySelector(".active")}),o&&r&&(o.classList.toggle("button--inactive",e.checked),r.classList.toggle("button--inactive",!e.checked))}}toggleActionMenu(){this.shadowRoot.querySelector('slot[name="action-menu-content"]').classList.toggle("hidden")}get title(){return this.querySelector('[slot="heading"]').textContent.trim()}updateFilters(e){let n={...this.filters};Object.keys(n).forEach(a=>{if(e){n[a]=Math.min(n[a],2);return}let o=n[a];o===1||isNaN(o)||(n[a]=Number(o)+1)}),this.filters=n}includes(e){return this.textContent.match(new RegExp(e,"i"))!==null}render(){switch(this.variant){case"special-offers":return this.renderSpecialOffer();case"segment":return this.renderSegment();case"plans":return this.renderPlans();case"catalog":return this.renderCatalog();default:return t` <div />`}}renderSpecialOffer(){return t` <div
                class="image"
                style="${this.image?`background-image: url(${this.image})`:""}"
            >
                ${this.decorateRibbon()}
            </div>
            <div class="body">
                <slot name="detail-m"></slot>
                <slot name="heading-xs"></slot>
                <slot name="body-xs"></slot>
            </div>
            ${this.evergreen?t`
                      <div
                          class="detail-bg-container"
                          style="background: ${this.detailBg}"
                      >
                          <slot name="detail-bg"></slot>
                      </div>
                  `:t`
                      <hr />
                      <slot name="footer"></slot>
                  `}`}renderSegment(){return t` ${this.decorateRibbon()}
            <div class="body">
                <slot name="heading-xs"></slot>
                <slot name="body-xs"></slot>
            </div>
            <hr />
            <slot name="footer"></slot>`}renderPlans(){return t` ${this.decorateRibbon()}
            <div class="body">
                ${this.renderIcons()}
                <slot name="heading-xs"></slot>
                <slot name="heading-m"></slot>
                <slot name="body-xxs"></slot>
                <slot name="body-xs"></slot>
                ${this.createCheckBox()}
            </div>
            ${this.createPlansFooter()}`}renderCatalog(){return t` <div class="body">
                <div class="top-section">
                    ${this.renderIcons()} ${this.decorateRibbon()}
                    <div
                        class="action-menu ${this.actionmenu?"invisible":"hidden"}"
                        @click="${this.toggleActionMenu}"
                    ></div>
                </div>
                <slot
                    name="action-menu-content"
                    class="action-menu-content ${this.actionMenuContent?"":"hidden"}"
                    >${this.actionMenuContent}</slot
                >
                <slot name="heading-xs"></slot>
                <slot name="heading-m"></slot>
                <slot name="body-xxs"></slot>
                <slot name="body-xs"></slot>
            </div>
            <slot name="footer"></slot>`}};customElements.define("merch-card",s);export{s as MerchCard};
