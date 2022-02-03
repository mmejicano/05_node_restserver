import { response } from "express";

export const index = (req, res = response) => {

  const query = req.query;
  res.json({ msg: "get api", query });
};

export const store = (req, res) => {
  const body = req.body;
  res.json({ msg: "post api", body });
};

export const update = (req, res) => {
  const id = req.params.id;
  res.json({ msg: "put api", id });
};

export const destroy = (req, res) => {
  const id = req.params.id;

  res.json({ msg: "delete api", id });
};
