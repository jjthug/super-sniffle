const {MerkleTree} = require('merkletreejs');
const keccak256 = require('keccak256');
const datajson = require ('../data/smalldata');

let whitelistAddresses = datajson;

const leafNodes = whitelistAddresses.map(addr => keccak256(addr));
const merkleTree = new MerkleTree(leafNodes, keccak256, {sortPairs: true});

const rootHash = merkleTree.getRoot();
rootString = rootHash.toString('hex');
console.log("root =", rootString);

// const claimingAddress = keccak256("0x60C1F061B4fd365389dEFa3596FfFC8749D83b3B");
// const hexProof = merkleTree.getHexProof(claimingAddress);
// console.log("hex proof =", hexProof);

async function getProof(req, res){
    let theaddress = req.query.address;
    const claimingAddress = keccak256(theaddress.toString());
    const hexProof = merkleTree.getHexProof(claimingAddress);
    res.status(200).send({
        data:hexProof
    });
}

module.exports = {
    getProof
}