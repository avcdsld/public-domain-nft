// 🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨
// ⚠️ THIS FILE IS AUTO-GENERATED WHEN packages/dapplib/cadence CHANGES
// DO **** NOT **** MODIFY CODE HERE AS IT WILL BE OVER-WRITTEN
// 🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨

const fcl = require("@onflow/fcl");

module.exports = class DappScripts {

	static basic_nft_getIDs(imports) {
		return fcl.script`
				
				${DappScripts.injectImports(imports)}
				pub fun main(addr: Address) : [UInt64]? {
				    let account = getAccount(addr)
				    let capability = account.getCapability(/public/NFTReceiver)
				    let ref = capability.borrow<&AnyResource{DappState.NFTReceiver}>()
				
				    return ref?.getIDs()
				}
		`;
	}

	static basic_nft_getMetadata(imports) {
		return fcl.script`
				
				${DappScripts.injectImports(imports)}
				pub fun main(addr: Address, ids: [UInt64]) : [{String: String}?] {
				    let account = getAccount(addr)
				    let capability = account.getCapability(/public/NFTReceiver)
				    let collectionRef = capability.borrow<&AnyResource{DappState.NFTReceiver}>()
				    var res: [{String: String}?] = []
				    var i = 0
				    while i < ids.length {
				        let nftRef = collectionRef?.borrowNFT(id: ids[i])
				        res.append(nftRef?.metadata)
				        i = i + 1
				    }
				    return res
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
