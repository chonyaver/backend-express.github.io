const express = require('express');
const router = express.Router();

const user = {
  user01: {
    uid: 'uid01',
    userId: 'user_id01',
    tags: 'verified',
    group: 'member',
    date: Date.now(),
    createdFrom: 'email',
    linkLine: false,
    account: {
      email: 'test@domain.com',
      emailVerified: true,
      fullName: 'เงินทอง ได้เร็ว',
      phoneNumber: '+66829914824',
      phoneVerified: true,
      phoneStatus: 'verified',
      passport: '3560400004433',
      passportVerified: true,
      passportStatus: 'verified',
      passportURL: '',
      storageURL: '',
      lastUpdatePhoto: Date.now(),
      line: 'NA',
      linkSocial: true,
      socials: [
        {
          id: 'so01',
          socialName: 'TMN',
          social: '0829914824'
        },
        {
          id: 'so02',
          socialName: 'PROMPT',
          social: '0829914824'
        }
      ]
    },
    bank: {
      bankName: 'other',
      bankName2: 'ไทยเครดิต',
      bankNumber: '0078750065',
      bankVerified: true,
      bankStatus: 'verified',
      bankURL: 'NA',
      storageURL: 'NA',
      lastUpdatePhoto: Date.now()
    }
  },
  user02: {
    uid: 'uid02',
    userId: 'user_id02',
    tags: 'unverified',
    group: 'member',
    date: Date.now(),
    createdFrom: 'phone',
    linkLine: false,
    account: {
      email: 'NA',
      emailVerified: false,
      fullName: 'เงินทอง ได้เร็ว',
      phoneNumber: '+66829914824',
      phoneVerified: true,
      phoneStatus: 'verified',
      passport: '3560400004433',
      passportVerified: true,
      passportStatus: 'checking',
      passportURL: '',
      storageURL: '',
      lastUpdatePhoto: Date.now(),
      line: 'NA',
      linkSocial: true,
      socials: [
        {
          id: 'so01',
          socialName: 'DOLPHIN',
          social: '0829914824'
        },
        {
          id: 'so02',
          socialName: 'FBPAY',
          social: '@fs-exchanger'
        },
        {
          id: 'so03',
          socialName: 'WCPAY',
          social: '@fs-exchanger'
        }
      ]
    },
    bank: {
      bankName: 'GSB',
      bankName2: '',
      bankNumber: '030267996655',
      bankVerified: true,
      bankStatus: 'verified',
      bankURL: 'NA',
      storageURL: 'NA',
      lastUpdatePhoto: Date.now()
    }
  },
  user03: {
    uid: 'uid03',
    userId: 'line:user_id03',
    tags: 'unverified',
    group: 'member',
    date: Date.now(),
    createdFrom: 'line',
    linkLine: true,
    account: {
      email: 'NA',
      emailVerified: false,
      fullName: 'เงินทอง ได้เร็ว',
      phoneNumber: '+66829914824',
      phoneVerified: true,
      phoneStatus: 'verified',
      passport: '3560400004433',
      passportVerified: true,
      passportStatus: 'verified',
      passportURL: '',
      storageURL: '',
      lastUpdatePhoto: Date.now(),
      line: 'FS EXCHANGER',
      linkSocial: false,
      socials: [
        {
          id: 'so01',
          socialName: 'TMN',
          social: '0829914824'
        },
        {
          id: 'so02',
          socialName: 'PROMPT',
          social: '0829914824'
        }
      ]
    },
    bank: {
      bankName: 'KBANK',
      bankName2: 'ไทยเครดิต',
      bankNumber: '0078750065',
      bankVerified: true,
      bankStatus: 'checking',
      bankURL: 'NA',
      storageURL: 'NA',
      lastUpdatePhoto: Date.now()
    }
  }
};

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:uid', function (req, res) {
  if (req.method === 'GET') {
    const uid = req.params.uid;
    switch (uid) {
      case 'uid01':
        res.status(200).end(JSON.stringify(user.user01, null, ' '));
        break;
      case 'uid02':
        res.status(200).end(JSON.stringify(user.user02, null, ' '));
        break;
      case 'uid03':
        res.status(200).end(JSON.stringify(user.user03, null, ' '));
        break;
      default:
        if (!uid) {
          res.status(404).send(new Error('Missing uid or uid mismatch!'));
        }
        break;
    }
  }
});

module.exports = router;
