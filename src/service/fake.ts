import Chance from 'chance'

const fake = new Chance()

interface Card {
  imgUrl: string
  title: string
  content: string
  registerUser: string
  registerUserImgUrl: string
  cntComment: number
  cntLike: number
  cdt: Date
}

export function createFakeCardData(cnt: number) {
  let res: Card[] = []
  for(let i = 0; i < cnt; i++) {
    res.push({
      imgUrl: 'https://media.vlpt.us/images/mowinckel/post/c767d8ed-7c23-4a17-95d7-ea4c413e06c9/R1280x0.jpeg?w=640',
      title: fake.sentence(),
      content: fake.paragraph(),
      registerUser: fake.name(),
      registerUserImgUrl: 'https://media.vlpt.us/images/mowinckel/profile/0e635852-b742-424e-9a69-604f83f5efb3/-.png?w=120',
      cntComment: fake.integer({
        min: 0,
        max: 1000
      }),
      cntLike: fake.integer({
        min: 0,
        max: 1000
      }),
      cdt: new Date(fake.date())
    })
  }
  return res
}
