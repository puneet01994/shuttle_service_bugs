import React from "react";
import addImage from "../../Assets/add.png";
import ReactToExcel from "react-html-table-to-excel";
import PropTypes from "prop-types";

import edit from "../../Assets/edit.png";
import del from "../../Assets/delete.png";

import next from "../../Assets/right.png";
import prev from "../../Assets/left.png";
import ErrorBoundary from "./ErrorBoundary";

/**
 * AddButton function to add new users
 * @param {object} props
 */
export const AddButton = (props) => {
  return (
    <ErrorBoundary>
      <input
        data-test="buttonComponent"
        type="image"
        className="icon"
        src={addImage}
        onClick={props.addModalopen}
        alt="add"
      />
    </ErrorBoundary>
  );
};

/**
 * DeleteButton function to delete the existing entry
 * @param {object} props
 */

export const DeleteButton = (props) => {
  return (
    <input
      data-test="deleteButton"
      className="iconRadio"
      type="image"
      src={del}
      onClick={() => props.delete(props.targetId)}
      alt="Delete"
    />
  );
};

/**
 * ExportButton function to export thereports of the data to excelsheet
 * @param {object} props
 */

export const ExportButton = (props) => {
  return (
    <ReactToExcel
      data-test="buttonComponent"
      className="dropdown"
      table={props.tableName}
      filename={props.fileName}
      sheet="1"
      buttonText="export"
    />
  );
};

/**
 * PrevButton function to go to previous page on pagination
 * @param {object} props
 */

export const PrevButton = (props) => {
  return (
    <input
      data-test="buttonComponent"
      type="image"
      value="Prev"
      className="ascicon"
      id="prev"
      onClick={props.handleTableChange}
      alt="prev"
      src={prev}
    />
  );
};

/**
 * NextButton function to go to next page on the pagination
 * @param {object} props
 */

export const NextButton = (props) => {
  return (
    <input
      data-test="buttonComponent"
      type="image"
      value="Next"
      alt="next"
      className="descicon"
      id="next"
      src={next}
      onClick={props.handleTableChange}
    />
  );
};

/**
 * Pagevalue  function to change the pagesize
 * @param {object} props
 */

export const PageValue = (props) => {
  return (
    <input
      data-test="buttonComponent"
      className="text"
      type="button"
      id="val"
      disabled
      value={props.val + 1}
    />
  );
};

/**
 * EditButton function to edit the values of particular entry
 * @param {object} props
 */

export const EditButton = (props) => {
  return (
    <input
      data-test="buttonComponent"
      className="iconRadio"
      type="image"
      src={edit}
      alt="edit"
    />
  );
};

AddButton.propTypes = {
  addModalopen: PropTypes.func,
};

PrevButton.propTypes = {
  handleTableChange: PropTypes.func,
};
NextButton.propTypes = {
  handleTableChange: PropTypes.func,
};
ExportButton.propTypes = {
  fileName: PropTypes.string,
  tableName: PropTypes.string,
};

AddButton.propTypes = {
  targetId: PropTypes.string,
};
DeleteButton.propTypes = {
  delete: PropTypes.func,
  targetId: PropTypes.string,
};

PageValue.propTypes = {
  val: PropTypes.number,
};
