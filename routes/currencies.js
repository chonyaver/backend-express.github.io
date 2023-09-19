const express = require('express');
const router = express.Router();

const currencies = [
  {
    id: "currency01",
    src: "https://res.cloudinary.com/dckrvb0rw/image/upload/v1691752040/public/currencies/pp_jwyiyn.svg",
    title: "Paypal",
    class: "d-block justify-center text-center align-center bd-4 bd-pp pointer",
    ref: "ภาพที่1"
  },
  {
    id: "currency02",
    src: "https://res.cloudinary.com/dckrvb0rw/image/upload/v1691752040/public/currencies/wm_psbngh.svg",
    title: "Web Money",
    class: "d-block justify-center text-center align-center bd-4 bd-wm pointer",
    ref: "ภาพที่2"
  },
  {
    id: "currency03",
    src: "https://res.cloudinary.com/dckrvb0rw/image/upload/v1691752040/public/currencies/pm_swnyoo.svg",
    title: "Perfect Money",
    class: "d-block justify-center text-center align-center bd-4 bd-pm pointer",
    ref: "ภาพที่3"
  },
  {
    id: "currency04",
    src: "https://res.cloudinary.com/dckrvb0rw/image/upload/v1691752040/public/currencies/nt_oqoe3g.svg",
    title: "Neteller",
    class: "d-block justify-center text-center align-center bd-4 bd-nt pointer",
    ref: "ภาพที่4"
  },
  {
    id: "currency05",
    src: "https://res.cloudinary.com/dckrvb0rw/image/upload/v1691752040/public/currencies/sk_dkxisv.svg",
    title: "Skrill",
    class: "d-block justify-center text-center align-center bd-4 bd-sk pointer",
    ref: "ภาพที่5"
  }
];

const ppSells = [
  {
    id: 'pp01',
    type: 'sell',
    min: 20,
    max: 500,
    rate: 30.00,
    tax: 15,
    fee: 0,
    remaining: 10000
  },
  {
    id: 'pp02',
    type: 'sell',
    min: 501,
    max: 1000,
    rate: 30.25,
    tax: 14.75,
    fee: 0,
    remaining: 10000
  },
  {
    id: 'pp03',
    type: 'sell',
    min: 1001,
    max: 1500,
    rate: 30.50,
    tax: 14.50,
    fee: 0,
    remaining: 10000
  },
  {
    id: 'pp04',
    type: 'sell',
    min: 1501,
    max: 2000,
    rate: 30.75,
    tax: 14.25,
    fee: 0,
    remaining: 10000
  },
  {
    id: 'pp05',
    type: 'sell',
    min: 2001,
    max: 10000,
    rate: 31.00,
    tax: 14,
    fee: 0,
    remaining: 10000
  }
];

const ppBuys = [
  {
    id: 'pp06',
    type: 'buy',
    min: 20,
    max: 500,
    rate: 38.00,
    tax: 3,
    fee: 0,
    remaining: 10000
  },
  {
    id: 'pp07',
    type: 'buy',
    min: 501,
    max: 1000,
    rate: 37.75,
    tax: 2.75,
    fee: 0,
    remaining: 10000
  },
  {
    id: 'pp08',
    type: 'buy',
    min: 1001,
    max: 1500,
    rate: 37.50,
    tax: 2.50,
    fee: 0,
    remaining: 10000
  },
  {
    id: 'pp09',
    type: 'buy',
    min: 1501,
    max: 2000,
    rate: 37.25,
    tax: 2.25,
    fee: 0,
    remaining: 10000
  },
  {
    id: 'pp10',
    type: 'buy',
    min: 2001,
    max: 10000,
    rate: 37.00,
    tax: 2,
    fee: 0,
    remaining: 10000
  }
];

const wmSells = [
  {
    id: 'wm01',
    type: 'sell',
    min: 20,
    max: 500,
    rate: 30.00,
    tax: 15,
    fee: 0,
    remaining: 10000
  },
  {
    id: 'wm02',
    type: 'sell',
    min: 501,
    max: 1000,
    rate: 30.25,
    tax: 14.75,
    fee: 0,
    remaining: 10000
  },
  {
    id: 'wm03',
    type: 'sell',
    min: 1001,
    max: 1500,
    rate: 30.50,
    tax: 14.50,
    fee: 0,
    remaining: 10000
  },
  {
    id: 'wm04',
    type: 'sell',
    min: 1501,
    max: 2000,
    rate: 30.75,
    tax: 14.25,
    fee: 0,
    remaining: 10000
  },
  {
    id: 'wm05',
    type: 'sell',
    min: 2001,
    max: 10000,
    rate: 31.00,
    tax: 14,
    fee: 0,
    remaining: 10000
  }
];

const wmBuys = [
  {
    id: 'wm06',
    type: 'buy',
    min: 20,
    max: 500,
    rate: 38.00,
    tax: 3,
    fee: 0,
    remaining: 10000
  },
  {
    id: 'wm07',
    type: 'buy',
    min: 501,
    max: 1000,
    rate: 37.75,
    tax: 2.75,
    fee: 0,
    remaining: 10000
  },
  {
    id: 'wm08',
    type: 'buy',
    min: 1001,
    max: 1500,
    rate: 37.50,
    tax: 2.50,
    fee: 0,
    remaining: 10000
  },
  {
    id: 'wm09',
    type: 'buy',
    min: 1501,
    max: 2000,
    rate: 37.25,
    tax: 2.25,
    fee: 0,
    remaining: 10000
  },
  {
    id: 'wm10',
    type: 'buy',
    min: 2001,
    max: 10000,
    rate: 37.00,
    tax: 2,
    fee: 0,
    remaining: 10000
  }
];

const pmSells = [
  {
    id: 'pm01',
    type: 'sell',
    min: 20,
    max: 500,
    rate: 30.00,
    tax: 15,
    fee: 0,
    remaining: 10000
  },
  {
    id: 'pm02',
    type: 'sell',
    min: 501,
    max: 1000,
    rate: 30.25,
    tax: 14.75,
    fee: 0,
    remaining: 10000
  },
  {
    id: 'pm03',
    type: 'sell',
    min: 1001,
    max: 1500,
    rate: 30.50,
    tax: 14.50,
    fee: 0,
    remaining: 10000
  },
  {
    id: 'pm04',
    type: 'sell',
    min: 1501,
    max: 2000,
    rate: 30.75,
    tax: 14.25,
    fee: 0,
    remaining: 10000
  },
  {
    id: 'pm05',
    type: 'sell',
    min: 2001,
    max: 10000,
    rate: 31.00,
    tax: 14,
    fee: 0,
    remaining: 10000
  }
];

const pmBuys = [
  {
    id: 'pm06',
    type: 'buy',
    min: 20,
    max: 500,
    rate: 38.00,
    tax: 3,
    fee: 0,
    remaining: 10000
  },
  {
    id: 'pm07',
    type: 'buy',
    min: 501,
    max: 1000,
    rate: 37.75,
    tax: 2.75,
    fee: 0,
    remaining: 10000
  },
  {
    id: 'pm08',
    type: 'buy',
    min: 1001,
    max: 1500,
    rate: 37.50,
    tax: 2.50,
    fee: 0,
    remaining: 10000
  },
  {
    id: 'pm09',
    type: 'buy',
    min: 1501,
    max: 2000,
    rate: 37.25,
    tax: 2.25,
    fee: 0,
    remaining: 10000
  },
  {
    id: 'pm10',
    type: 'buy',
    min: 2001,
    max: 10000,
    rate: 37.00,
    tax: 2,
    fee: 0,
    remaining: 10000
  }
];

const ntSells = [
  {
    id: 'nt01',
    type: 'sell',
    min: 20,
    max: 500,
    rate: 30.00,
    tax: 15,
    fee: 0,
    remaining: 10000
  },
  {
    id: 'nt02',
    type: 'sell',
    min: 501,
    max: 1000,
    rate: 30.25,
    tax: 14.75,
    fee: 0,
    remaining: 10000
  },
  {
    id: 'nt03',
    type: 'sell',
    min: 1001,
    max: 1500,
    rate: 30.50,
    tax: 14.50,
    fee: 0,
    remaining: 10000
  },
  {
    id: 'nt04',
    type: 'sell',
    min: 1501,
    max: 2000,
    rate: 30.75,
    tax: 14.25,
    fee: 0,
    remaining: 10000
  },
  {
    id: 'nt05',
    type: 'sell',
    min: 2001,
    max: 10000,
    rate: 31.00,
    tax: 14,
    fee: 0,
    remaining: 10000
  }
];

const ntBuys = [
  {
    id: 'nt06',
    type: 'buy',
    min: 20,
    max: 500,
    rate: 38.00,
    tax: 3,
    fee: 0,
    remaining: 10000
  },
  {
    id: 'nt07',
    type: 'buy',
    min: 501,
    max: 1000,
    rate: 37.75,
    tax: 2.75,
    fee: 0,
    remaining: 10000
  },
  {
    id: 'nt08',
    type: 'buy',
    min: 1001,
    max: 1500,
    rate: 37.50,
    tax: 2.50,
    fee: 0,
    remaining: 10000
  },
  {
    id: 'nt09',
    type: 'buy',
    min: 1501,
    max: 2000,
    rate: 37.25,
    tax: 2.25,
    fee: 0,
    remaining: 10000
  },
  {
    id: 'nt10',
    type: 'buy',
    min: 2001,
    max: 10000,
    rate: 37.00,
    tax: 2,
    fee: 0,
    remaining: 10000
  }
];

const skSells = [
  {
    id: 'sk01',
    type: 'sell',
    min: 20,
    max: 500,
    rate: 30.00,
    tax: 15,
    fee: 0,
    remaining: 10000
  },
  {
    id: 'sk02',
    type: 'sell',
    min: 501,
    max: 1000,
    rate: 30.25,
    tax: 14.75,
    fee: 0,
    remaining: 10000
  },
  {
    id: 'sk03',
    type: 'sell',
    min: 1001,
    max: 1500,
    rate: 30.50,
    tax: 14.50,
    fee: 0,
    remaining: 10000
  },
  {
    id: 'sk04',
    type: 'sell',
    min: 1501,
    max: 2000,
    rate: 30.75,
    tax: 14.25,
    fee: 0,
    remaining: 10000
  },
  {
    id: 'sk05',
    type: 'sell',
    min: 2001,
    max: 10000,
    rate: 31.00,
    tax: 14,
    fee: 0,
    remaining: 10000
  }
];

const skBuys = [
  {
    id: 'sk06',
    type: 'buy',
    min: 20,
    max: 500,
    rate: 38.00,
    tax: 3,
    fee: 0,
    remaining: 10000
  },
  {
    id: 'sk07',
    type: 'buy',
    min: 501,
    max: 1000,
    rate: 37.75,
    tax: 2.75,
    fee: 0,
    remaining: 10000
  },
  {
    id: 'sk08',
    type: 'buy',
    min: 1001,
    max: 1500,
    rate: 37.50,
    tax: 2.50,
    fee: 0,
    remaining: 10000
  },
  {
    id: 'sk09',
    type: 'buy',
    min: 1501,
    max: 2000,
    rate: 37.25,
    tax: 2.25,
    fee: 0,
    remaining: 10000
  },
  {
    id: 'sk10',
    type: 'buy',
    min: 2001,
    max: 10000,
    rate: 37.00,
    tax: 2,
    fee: 0,
    remaining: 10000
  }
];

router.get('/', function (req, res) {
  if (req.method === 'GET') {
    res.status(200).end(JSON.stringify(currencies, null, ' '));
  }
});

router.get('/:id/sell', function (req, res) {
  const id = req.params.id;
  switch (id) {
    case 'currency01':
      res.status(200).end(JSON.stringify(ppSells, null, ' '));
      break;
    case 'currency02':
      res.status(200).end(JSON.stringify(wmSells, null, ' '));
      break;
    case 'currency03':
      res.status(200).end(JSON.stringify(pmSells, null, ' '));
      break;
    case 'currency04':
      res.status(200).end(JSON.stringify(ntSells, null, ' '));
      break;
    case 'currency05':
      res.status(200).end(JSON.stringify(skSells, null, ' '));
      break;
    default:
      if (!id) {
        res.status(404).send(new Error('Bad request'));
      }
      break;
  }
})

router.get('/:id/buy', function (req, res) {
  const id = req.params.id;
  switch (id) {
    case 'currency01':
      res.status(200).end(JSON.stringify(ppBuys, null, ' '));
      break;
    case 'currency02':
      res.status(200).end(JSON.stringify(wmBuys, null, ' '));
      break;
    case 'currency03':
      res.status(200).end(JSON.stringify(pmBuys, null, ' '));
      break;
    case 'currency04':
      res.status(200).end(JSON.stringify(ntBuys, null, ' '));
      break;
    case 'currency05':
      res.status(200).end(JSON.stringify(skBuys, null, ' '));
      break;
    default:
      if (!id) {
        res.status(404).send(new Error('Bad request'));
      }
      break;
  }
});

module.exports = router;
