/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  BigNumberish,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../common";
import type { MewToken, MewTokenInterface } from "../../contracts/MewToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "initialValue",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "allowance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientAllowance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientBalance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address",
      },
    ],
    name: "ERC20InvalidApprover",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "ERC20InvalidReceiver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSpender",
    type: "error",
  },
  {
    inputs: [],
    name: "NotEnoughBalanceToBurn",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "buy",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "sell",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051611db1380380611db183398181016040528101906100329190610566565b816040518060400160405280600881526020017f4d6577546f6b656e0000000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f4d6577000000000000000000000000000000000000000000000000000000000081525081600390816100ae91906107ec565b5080600490816100be91906107ec565b505050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036101335760006040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260040161012a91906108cd565b60405180910390fd5b6101428161015a60201b60201c565b50610153308261022060201b60201c565b50506109ac565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036102925760006040517fec442f0500000000000000000000000000000000000000000000000000000000815260040161028991906108cd565b60405180910390fd5b6102a4600083836102a860201b60201c565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036102fa5780600260008282546102ee9190610917565b925050819055506103cd565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610386578381836040517fe450d38c00000000000000000000000000000000000000000000000000000000815260040161037d9392919061095a565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036104165780600260008282540392505081905550610463565b806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516104c09190610991565b60405180910390a3505050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006104fd826104d2565b9050919050565b61050d816104f2565b811461051857600080fd5b50565b60008151905061052a81610504565b92915050565b6000819050919050565b61054381610530565b811461054e57600080fd5b50565b6000815190506105608161053a565b92915050565b6000806040838503121561057d5761057c6104cd565b5b600061058b8582860161051b565b925050602061059c85828601610551565b9150509250929050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061062757607f821691505b60208210810361063a576106396105e0565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026106a27fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610665565b6106ac8683610665565b95508019841693508086168417925050509392505050565b6000819050919050565b60006106e96106e46106df84610530565b6106c4565b610530565b9050919050565b6000819050919050565b610703836106ce565b61071761070f826106f0565b848454610672565b825550505050565b600090565b61072c61071f565b6107378184846106fa565b505050565b5b8181101561075b57610750600082610724565b60018101905061073d565b5050565b601f8211156107a05761077181610640565b61077a84610655565b81016020851015610789578190505b61079d61079585610655565b83018261073c565b50505b505050565b600082821c905092915050565b60006107c3600019846008026107a5565b1980831691505092915050565b60006107dc83836107b2565b9150826002028217905092915050565b6107f5826105a6565b67ffffffffffffffff81111561080e5761080d6105b1565b5b610818825461060f565b61082382828561075f565b600060209050601f8311600181146108565760008415610844578287015190505b61084e85826107d0565b8655506108b6565b601f19841661086486610640565b60005b8281101561088c57848901518255600182019150602085019450602081019050610867565b868310156108a957848901516108a5601f8916826107b2565b8355505b6001600288020188555050505b505050505050565b6108c7816104f2565b82525050565b60006020820190506108e260008301846108be565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061092282610530565b915061092d83610530565b9250828201905080821115610945576109446108e8565b5b92915050565b61095481610530565b82525050565b600060608201905061096f60008301866108be565b61097c602083018561094b565b610989604083018461094b565b949350505050565b60006020820190506109a6600083018461094b565b92915050565b6113f6806109bb6000396000f3fe6080604052600436106100f35760003560e01c80638da5cb5b1161008a578063d96a094a11610059578063d96a094a1461032c578063dd62ed3e14610348578063e4849b3214610385578063f2fde38b146103ae576100f3565b80638da5cb5b1461027057806395d89b411461029b578063a0712d68146102c6578063a9059cbb146102ef576100f3565b8063313ce567116100c6578063313ce567146101c857806342966c68146101f357806370a082311461021c578063715018a614610259576100f3565b806306fdde03146100f8578063095ea7b31461012357806318160ddd1461016057806323b872dd1461018b575b600080fd5b34801561010457600080fd5b5061010d6103d7565b60405161011a919061101d565b60405180910390f35b34801561012f57600080fd5b5061014a600480360381019061014591906110d8565b610469565b6040516101579190611133565b60405180910390f35b34801561016c57600080fd5b5061017561048c565b604051610182919061115d565b60405180910390f35b34801561019757600080fd5b506101b260048036038101906101ad9190611178565b610496565b6040516101bf9190611133565b60405180910390f35b3480156101d457600080fd5b506101dd6104c5565b6040516101ea91906111e7565b60405180910390f35b3480156101ff57600080fd5b5061021a60048036038101906102159190611202565b6104ce565b005b34801561022857600080fd5b50610243600480360381019061023e919061122f565b610525565b604051610250919061115d565b60405180910390f35b34801561026557600080fd5b5061026e61056d565b005b34801561027c57600080fd5b50610285610581565b604051610292919061126b565b60405180910390f35b3480156102a757600080fd5b506102b06105ab565b6040516102bd919061101d565b60405180910390f35b3480156102d257600080fd5b506102ed60048036038101906102e89190611202565b61063d565b005b3480156102fb57600080fd5b50610316600480360381019061031191906110d8565b610652565b6040516103239190611133565b60405180910390f35b61034660048036038101906103419190611202565b610675565b005b34801561035457600080fd5b5061036f600480360381019061036a9190611286565b610683565b60405161037c919061115d565b60405180910390f35b34801561039157600080fd5b506103ac60048036038101906103a79190611202565b61070a565b005b3480156103ba57600080fd5b506103d560048036038101906103d0919061122f565b610718565b005b6060600380546103e6906112f5565b80601f0160208091040260200160405190810160405280929190818152602001828054610412906112f5565b801561045f5780601f106104345761010080835404028352916020019161045f565b820191906000526020600020905b81548152906001019060200180831161044257829003601f168201915b5050505050905090565b60008061047461079e565b90506104818185856107a6565b600191505092915050565b6000600254905090565b6000806104a161079e565b90506104ae8582856107b8565b6104b985858561084c565b60019150509392505050565b60006012905090565b6104d6610940565b6104df30610525565b811115610518576040517f7cfc58d300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61052230826109c7565b50565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610575610940565b61057f6000610a49565b565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6060600480546105ba906112f5565b80601f01602080910402602001604051908101604052809291908181526020018280546105e6906112f5565b80156106335780601f1061060857610100808354040283529160200191610633565b820191906000526020600020905b81548152906001019060200180831161061657829003601f168201915b5050505050905090565b610645610940565b61064f3082610b0f565b50565b60008061065d61079e565b905061066a81858561084c565b600191505092915050565b61068030338361084c565b50565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b61071533308361084c565b50565b610720610940565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036107925760006040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401610789919061126b565b60405180910390fd5b61079b81610a49565b50565b600033905090565b6107b38383836001610b91565b505050565b60006107c48484610683565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146108465781811015610836578281836040517ffb8f41b200000000000000000000000000000000000000000000000000000000815260040161082d93929190611326565b60405180910390fd5b61084584848484036000610b91565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036108be5760006040517f96c6fd1e0000000000000000000000000000000000000000000000000000000081526004016108b5919061126b565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036109305760006040517fec442f05000000000000000000000000000000000000000000000000000000008152600401610927919061126b565b60405180910390fd5b61093b838383610d68565b505050565b61094861079e565b73ffffffffffffffffffffffffffffffffffffffff16610966610581565b73ffffffffffffffffffffffffffffffffffffffff16146109c55761098961079e565b6040517f118cdaa70000000000000000000000000000000000000000000000000000000081526004016109bc919061126b565b60405180910390fd5b565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610a395760006040517f96c6fd1e000000000000000000000000000000000000000000000000000000008152600401610a30919061126b565b60405180910390fd5b610a4582600083610d68565b5050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610b815760006040517fec442f05000000000000000000000000000000000000000000000000000000008152600401610b78919061126b565b60405180910390fd5b610b8d60008383610d68565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603610c035760006040517fe602df05000000000000000000000000000000000000000000000000000000008152600401610bfa919061126b565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610c755760006040517f94280d62000000000000000000000000000000000000000000000000000000008152600401610c6c919061126b565b60405180910390fd5b81600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508015610d62578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92584604051610d59919061115d565b60405180910390a35b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610dba578060026000828254610dae919061138c565b92505081905550610e8d565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610e46578381836040517fe450d38c000000000000000000000000000000000000000000000000000000008152600401610e3d93929190611326565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610ed65780600260008282540392505081905550610f23565b806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610f80919061115d565b60405180910390a3505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610fc7578082015181840152602081019050610fac565b60008484015250505050565b6000601f19601f8301169050919050565b6000610fef82610f8d565b610ff98185610f98565b9350611009818560208601610fa9565b61101281610fd3565b840191505092915050565b600060208201905081810360008301526110378184610fe4565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061106f82611044565b9050919050565b61107f81611064565b811461108a57600080fd5b50565b60008135905061109c81611076565b92915050565b6000819050919050565b6110b5816110a2565b81146110c057600080fd5b50565b6000813590506110d2816110ac565b92915050565b600080604083850312156110ef576110ee61103f565b5b60006110fd8582860161108d565b925050602061110e858286016110c3565b9150509250929050565b60008115159050919050565b61112d81611118565b82525050565b60006020820190506111486000830184611124565b92915050565b611157816110a2565b82525050565b6000602082019050611172600083018461114e565b92915050565b6000806000606084860312156111915761119061103f565b5b600061119f8682870161108d565b93505060206111b08682870161108d565b92505060406111c1868287016110c3565b9150509250925092565b600060ff82169050919050565b6111e1816111cb565b82525050565b60006020820190506111fc60008301846111d8565b92915050565b6000602082840312156112185761121761103f565b5b6000611226848285016110c3565b91505092915050565b6000602082840312156112455761124461103f565b5b60006112538482850161108d565b91505092915050565b61126581611064565b82525050565b6000602082019050611280600083018461125c565b92915050565b6000806040838503121561129d5761129c61103f565b5b60006112ab8582860161108d565b92505060206112bc8582860161108d565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061130d57607f821691505b6020821081036113205761131f6112c6565b5b50919050565b600060608201905061133b600083018661125c565b611348602083018561114e565b611355604083018461114e565b949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611397826110a2565b91506113a2836110a2565b92508282019050808211156113ba576113b961135d565b5b9291505056fea26469706673582212201651d2d7802e57e32e5bb99e6e71463809a72494927e18f8ed9515c176e4dec964736f6c634300081b0033";

type MewTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MewTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MewToken__factory extends ContractFactory {
  constructor(...args: MewTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    owner: AddressLike,
    initialValue: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(owner, initialValue, overrides || {});
  }
  override deploy(
    owner: AddressLike,
    initialValue: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(owner, initialValue, overrides || {}) as Promise<
      MewToken & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): MewToken__factory {
    return super.connect(runner) as MewToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MewTokenInterface {
    return new Interface(_abi) as MewTokenInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): MewToken {
    return new Contract(address, _abi, runner) as unknown as MewToken;
  }
}
