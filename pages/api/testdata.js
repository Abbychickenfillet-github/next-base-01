// pages/api/data.js
export default function handler(req, res) {
    res.status(200).json([
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' }
    ]);
  }
  