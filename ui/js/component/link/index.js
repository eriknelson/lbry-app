import React from "react";
import { connect } from "react-redux";
import { doNavigate } from "actions/navigation";
import Link from "./view";

const perform = dispatch => ({
  doNavigate: path => dispatch(doNavigate(path)),
});

export default connect(null, perform)(Link);
