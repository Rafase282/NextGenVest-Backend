'use strict';

 /**
 * Returns recommendations
 * Accessed at POST /max_scholarship
 * @param {Object} req
 * @param {Object} res
 * @return {Object} {sequence: {Array}, total: {Number}}
 */
exports.postMatrix = (req, res) => {
  const data = req.body.data;
  res.status(200).json({
    sequence: data,
    total: data.length
  });
};

/**
 * Product of a sequence
 * @param {Array} seq
 * @return {Number}
 */
const seqTotal = exports.seqTotal = (seq) => {
  return seq.reduce((acc, val) => acc * val);
}

/**
 * Finds the right sequence
 * @param {Array} matrix
 * @param {Number} size
 * @param {Number} pick
 * @return {Array} seq
 */
const arrToSeq = exports.arrToSeq = (matrix, size, pick) => {
  let seq = [];
  // Ensures minimun matrix size.
  if (valMatrix(matrix, size)) {
    //To-DO: Get the right sequence.
  }
  return seq;
}

/**
 * Validates Matrix size
 * @param {Array} matrix
 * @param {Number} size
 * @return {Boolean}
 */
const valMatrix = exports.valMatrix = (matrix, size) => {
  return [...matrix.map((row) => row.length)]
    .reduce((acc, val) => acc + val) === Math.pow(size, 2);
}
