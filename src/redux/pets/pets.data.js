const PETS_DATA = [
  {
    id: 1,
    title: 'Pugs',
    routeName: 'pugs',
    items: [
      {
        id: 1,
        name: 'Scooter',
        imageUrl: 'https://images.unsplash.com/photo-1575425186775-b8de9a427e67?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
        price: 20
      },
      {
        id: 2,
        name: 'Winston',
        imageUrl: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=960&q=80',
        price: 35
      },
      {
        id: 3,
        name: 'Bo',
        imageUrl: 'https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
        price: 55
      },
      {
        id: 4,
        name: 'Dexter',
        imageUrl: 'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1287&q=80',
        price: 30
      },
      {
        id: 5,
        name: 'Mac',
        imageUrl: 'https://images.unsplash.com/photo-1553481829-2391f26d609c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=933&q=80',
        price: 70
      },
      {
        id: 6,
        name: 'Raven',
        imageUrl: 'https://images.unsplash.com/photo-1553698217-934b000f1f00?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1287&q=80',
        price: 35
      },
      {
        id: 7,
        name: 'Lexi',
        imageUrl: 'https://images.unsplash.com/photo-1509559320938-387dfd4e966b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
        price: 55
      },
      {
        id: 8,
        name: 'Izzy',
        imageUrl: 'https://images.unsplash.com/photo-1517423738875-5ce310acd3da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1305&q=80',
        price: 33
      },
      {
        id: 9,
        name: 'Heidi',
        imageUrl: 'https://images.unsplash.com/photo-1469982866068-278880140412?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80',
        price: 42
      }
    ]
  },
  {
    id: 2,
    title: 'Boston Terriers',
    routeName: 'boston-terriers',
    items: [
      {
        id: 10,
        name: 'Brewster',
        imageUrl: 'https://images.unsplash.com/flagged/photo-1564754808205-ad6b1efed4af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
        price: 70
      },
      {
        id: 11,
        name: 'Apollo',
        imageUrl: 'https://images.unsplash.com/photo-1503762546558-801f7a8feb6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
        price: 65
      },
      {
        id: 12,
        name: 'Copper',
        imageUrl: 'https://images.unsplash.com/photo-1577345890418-63d5e076033c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
        price: 66
      },
      {
        id: 13,
        name: 'Harry',
        imageUrl: 'https://images.unsplash.com/photo-1550946554-b6608fa1aaba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
        price: 68
      },
      {
        id: 14,
        name: 'Lilly',
        imageUrl: 'https://images.unsplash.com/photo-1585598124118-b5c8529e2216?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2114&q=80',
        price: 55
      },
      {
        id: 15,
        name: 'Dodger',
        imageUrl: 'https://images.unsplash.com/photo-1587453216584-25e572ec6e5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80',
        price: 57
      },
      {
        id: 16,
        name: 'Luke',
        imageUrl: 'https://images.unsplash.com/photo-1587169544739-b8a47166b33e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80',
        price: 71
      },
      {
        id: 17,
        name: 'Bella',
        imageUrl: 'https://images.unsplash.com/photo-1589305066367-71aff867d811?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1900&q=80',
        price: 65
      }
    ]
  },
  {
    id: 3,
    title: 'Dogs',
    routeName: 'dogs',
    items: [
      {
        id: 18,
        name: 'Roxy',
        imageUrl: 'https://images.unsplash.com/photo-1558121591-b684092bb548?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=958&q=80',
        price: 75
      },
      {
        id: 19,
        name: 'Koda',
        imageUrl: 'https://images.unsplash.com/photo-1535914191444-2a3b177956c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
        price: 63
      },
      {
        id: 20,
        name: 'Shiner',
        imageUrl: 'https://images.unsplash.com/photo-1551308075-d5f542da6386?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
        price: 72
      },
      {
        id: 21,
        name: 'Rocky',
        imageUrl: 'https://images.unsplash.com/photo-1526440847959-4e38e7f00b04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
        price: 36
      },
      {
        id: 22,
        name: 'Hazel',
        imageUrl: 'https://images.unsplash.com/photo-1545218553-cdb549f13f8a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80',
        price: 39
      }
    ]
  },
  {
    id: 4,
    title: 'Cats',
    routeName: 'cats',
    items: [
      {
        id: 23,
        name: 'Fluffy',
        imageUrl: 'https://images.unsplash.com/photo-1548681528-6a5c45b66b42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80',
        price: 35
      },
      {
        id: 24,
        name: 'Leo',
        imageUrl: 'https://images.unsplash.com/photo-1548247416-ec66f4900b2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1563&q=80',
        price: 45
      },
      {
        id: 25,
        name: 'Milo',
        imageUrl: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1558&q=80',
        price: 75
      },
      {
        id: 26,
        name: 'Mittens',
        imageUrl: 'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1576&q=80',
        price: 38
      },
      {
        id: 27,
        name: 'Gizmo',
        imageUrl: 'https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80',
        price: 45
      },
      {
        id: 28,
        name: 'Sasha',
        imageUrl: 'https://images.unsplash.com/photo-1488740304459-45c4277e7daf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80',
        price: 35
      },
      {
        id: 29,
        name: 'Smokey',
        imageUrl: 'https://images.unsplash.com/photo-1548366086-7f1b76106622?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1524&q=80',
        price: 20
      }
    ]
  },
  {
    id: 5,
    title: 'Funny Cats',
    routeName: 'funny-cats',
    items: [
      {
        id: 30,
        name: 'Loki',
        imageUrl: 'https://images.unsplash.com/photo-1513245543132-31f507417b26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1575&q=80',
        price: 29
      },
      {
        id: 31,
        name: 'Cupcake',
        imageUrl: 'https://images.unsplash.com/photo-1533738699159-d0c68059bb61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80',
        price: 55
      },
      {
        id: 32,
        name: 'Boots',
        imageUrl: 'https://images.unsplash.com/photo-1552933529-e359b2477252?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=2550&q=80',
      price: 53
      },
      {
        id: 33,
        name: 'Lola',
        imageUrl: 'https://images.unsplash.com/photo-1552826061-8a2c1201b40b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1900&q=80',
        price: 39
      },
      {
        id: 34,
        name: 'Peanut',
        imageUrl: 'https://images.unsplash.com/photo-1548403119-4f9f60f7c064?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2551&q=80',
        price: 40
      },
      {
        id: 35,
        name: 'Fiona',
        imageUrl: 'https://images.unsplash.com/photo-1581460000963-755eec994cf0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80',
        price: 25
      }
    ]
  }
];

export default PETS_DATA;
