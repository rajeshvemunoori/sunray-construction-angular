export class SeminarsService {
  private seminars = [
    {
      id: 1,
      "name": 'Naples Seminar',
      "seminar_day": new Date(15, 1, 2017),
      "start_time": '8:00 am',
      "end_time": '11:00 am',
      "price": 75.00,
      "credits_earn": 2,
      "president_name": 'Ariela Wagner',
      "president_image": "/assets/frontend/webinars/ariela.png",
      "principal_name": 'Alex Barthet',
      "principal_image": "/assets/frontend/webinars/barthet.png"
    },
    {
      id: 2,
      "name": 'Boca Seminar',
      "seminar_day": new Date(15, 1, 2017),
      "start_time": '8:00 am',
      "end_time": '11:00 am',
      "price": 75.00,
      "credits_earn": 2,
      "president_name": 'Ariela Wagner',
      "president_image": "/assets/frontend/webinars/ariela.png",
      "principal_name": 'Alex Barthet',
      "principal_image": "/assets/frontend/webinars/barthet.png"
    },
    {
      id: 3,
      "name": 'Miami Seminar',
      "seminar_day": new Date(15, 1, 2017),
      "start_time": '8:00 am',
      "end_time": '11:00 am',
      "price": 75.00,
      "credits_earn": 2,
      "president_name": 'Ariela Wagner',
      "president_image": "/assets/frontend/webinars/ariela.png",
      "principal_name": 'Alex Barthet',
      "principal_image": "/assets/frontend/webinars/barthet.png"
    }
  ];

  getSeminars() {
    return this.seminars;
  }

}
