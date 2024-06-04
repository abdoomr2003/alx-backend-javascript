export default function createInt8TypedArray(length, position, value) {
  if (typeof length !== 'number' || typeof position !== 'number' || typeof value !== 'number') { return []; }
  if (position >= length) {
    throw Error('Position outside range');
  } else {
    const myArrayBuffer = new ArrayBuffer(length);
    const myDataView = new DataView(myArrayBuffer);
    myDataView.setInt8(position, value);
    return myDataView;
  }
}
