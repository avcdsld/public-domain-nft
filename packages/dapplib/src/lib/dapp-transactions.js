// 🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨
// ⚠️ THIS FILE IS AUTO-GENERATED WHEN packages/dapplib/cadence CHANGES
// DO **** NOT **** MODIFY CODE HERE AS IT WILL BE OVER-WRITTEN
// 🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨

const fcl = require("@onflow/fcl");

module.exports = class DappTransactions {

	static basic_nft_initializeAccount(imports) {
		return fcl.transaction`
				
				${DappTransactions.injectImports(imports)}
				transaction {
				    prepare(acct: AuthAccount) {
				
				        // Delete any existing collection
				        let existing <- acct.load<@DappState.Collection>(from: /storage/NFTCollection)
				        destroy existing
				
				        // Create a new empty collection
				        let collection <- DappState.createEmptyCollection()
				
				        // store the empty NFT Collection in account storage
				        acct.save<@DappState.Collection>(<-collection, to: /storage/NFTCollection)
				
				        // create a public capability for the Collection
				        acct.link<&AnyResource{DappState.NFTReceiver}>(/public/NFTReceiver, target: /storage/NFTCollection)
				
				        // TODO: Event handling is not fully implemented
				        //emit DappState.InitializeAccount(acct.address : String)
				
				    }
				}
		`;
	}

	static basic_nft_mintNFT(imports) {
		return fcl.transaction`
				
				${DappTransactions.injectImports(imports)}
				transaction(recipient: Address, metadata: {String: String}) {
				    prepare(acct: AuthAccount) {
				        if acct.borrow<&AnyResource{DappState.NFTReceiver}>(from: /storage/NFTCollection) == nil {
				            let collection <- DappState.createEmptyCollection()
				            acct.save<@DappState.Collection>(<-collection, to: /storage/NFTCollection)
				            acct.link<&AnyResource{DappState.NFTReceiver}>(/public/NFTReceiver, target: /storage/NFTCollection)
				        }
				
				        let receiverRef = getAccount(recipient).getCapability(/public/NFTReceiver)!.borrow<&AnyResource{DappState.NFTReceiver}>()
				            ?? panic("Cannot borrow a reference to the recipient's NFTReceiver")
				
				        // let minter = acct.borrow<&DappState.NFTMinter>(from: /storage/NFTMinter)
				        //     ?? panic("Could not borrow a reference to the minter")
				        // minter.mintNFT(recipient: receiverRef, metadata: metadata)
				        DappState.mintNFT(recipient: receiverRef, metadata: metadata)
				    }
				}
		`;
	}

      
      static injectImports(imports) {
        let importCode = '';
        if (imports) {
          for(let key in imports) {
            importCode += '				import ' + key + ' from 0x' + imports[key].trim().replace('0x','') + '\n'; 
          };
        }
        return importCode;
      }     

      
}
