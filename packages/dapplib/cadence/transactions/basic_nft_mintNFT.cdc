
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