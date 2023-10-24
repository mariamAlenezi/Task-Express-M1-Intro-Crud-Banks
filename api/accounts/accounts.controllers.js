const accounts = require("../../accounts");

const getAll = (req, res) => {
  res.status(200).json(accounts);
};

const createAcc = (req, res) => {
  const newId = accounts[accounts.length - 1].id + 1;
  const username = req.body.username;
  if (!username) return res.status(400).json("please enter username");
  const newAccount = {
    id: newId,
    username: username,
    funds: 0,
  };
  accounts.push(newAccount);
  res.status(201).json(newAccount);
};

//Delete acc by Id

const deleteAcc = (req, res) => {
  const { id } = req.params;
  accounts.forEach((account, index) => {
    if (account.id == id) {
      accounts.splice(index, 1);
    }
  });
  res.status(201).json(accounts);
};

//Update acc.

const updateAcc = (req, res) => {
  const { id } = req.params;
  const { username, funds } = req.body;
  const account = accounts.find((account1) => {
    return account1.id == id;
  });
  if (username) {
    account.username = username;
  }
  if (funds) {
    account.funds = funds;
  }

  res.status(200).json(account);
};

//export

module.exports = { getAll, createAcc, deleteAcc, updateAcc };
