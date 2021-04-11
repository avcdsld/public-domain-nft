import DappLib from "@decentology/dappstarter-dapplib";
import DOM from "../../../lib/components/shared/dom";
import "../../../lib/components/shared/action-card.js";
import "../../../lib/components/shared/action-button.js";
import "../../../lib/components/widgets/text-widget.js";
import "../../../lib/components/widgets/number-widget.js";
import "../../../lib/components/widgets/account-widget.js";
import "../../../lib/components/widgets/upload-widget.js";
import { unsafeHTML } from "lit-html/directives/unsafe-html";
import { LitElement, html, customElement, property } from "lit-element";

@customElement("gallery-page")
export default class GalleryPage extends LitElement {
  @property()
  get;
  @property()
  post;
  @property()
  title;
  @property()
  category;
  @property()
  description;
  @property()
  nfts;

  createRenderRoot() {
    return this;
  }
  constructor(args) {
    super(args);
    this.nfts = [];
  }

  getNFTs() {
    return this.nfts;
  }

  handleClick = e => {
    this.nfts = e.detail.info.result;
    // this.nfts = [
    //   {
    //     title: "A Basket of Clams",
    //     artistDisplayName: 'Winslow Homer',
    //     objectDate: '1873',
    //     imageUrl: 'https://images.metmuseum.org/CRDImages/ep/web-large/DT1967.jpg',
    //     externalUrl: 'https://www.metmuseum.org/art/collection/search/12388'
    //   },
    //   {
    //     title: "A Basket of Clams",
    //     artistDisplayName: 'Winslow Homer',
    //     objectDate: '1873',
    //     imageUrl: 'https://images.metmuseum.org/CRDImages/ad/web-large/DT2054.jpg',
    //     externalUrl: 'https://www.metmuseum.org/art/collection/search/12388'
    //   }
    // ];
    this.requestUpdate();
  };

  render() {
    let content = html`
      <div class="container m-auto">
        <div class="shadow rounded-md bg-white mb-10 p-1">
        <div class="text-white p-3 bg-gray-500 flex justify-between items-center rounded-md rounded-b-none">
          <h5 class="font-bold">🖼 View Gallery</h5>
        </div>

        <div class="p-2 flex items-center justify-between">
          <div class="slot" id="card-body-getAllMetadata">
            <account-widget
              field="account"
              label="Account"
              placeholder="Account address"
            >
          </div>
          <div class="button-container text-right">
            <action-button
              source="#card-body-getAllMetadata"
              action="getAllMetadata"
              method="get"
              fields="account"
              text="View"
              return="${null}"
              .click=${this.handleClick}
            />
          </div>
        </div>
      </div>

      <div class="mb-10">
        <ul class="mt-3 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        ${this.getNFTs().map(nft =>
          html`<li class="col-span-1 bg-white rounded-lg shadow">
                <div class="flex flex-col items-center p-6 h-full">
                  <div class="font-bold text-xl mb-2">${nft.title}</div>
                  <p class="text-gray-700 text-base mb-3">${nft.artistDisplayName ? nft.artistDisplayName + ', ' : '' }${nft.objectDate}</p>
                  <img src="${nft.imageUrl}" alt="" style="width: auto; height: auto; max-width: 100%; max-height: 100%;">
                  <div class="flex flex-row flex-grow mt-4">
                    <a
                      target="_blank"
                      href=${nft.externalUrl}
                      class="self-end text-gray-600 py-2 px-8 rounded bg-white-500 hover:bg-gray-200"}"
                    >
                      View Detail
                    </a>
                  </div>
                </div>
              </li>`)
        }
        </ul>
      </div>
    `; 
    return content;

  }
}
