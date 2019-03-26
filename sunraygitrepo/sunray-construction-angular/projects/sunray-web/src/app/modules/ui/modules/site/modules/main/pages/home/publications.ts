import * as _ from 'lodash';

//import { CmsEntity } from '@ceo/cms'
import { JsonApiEntity } from '@ceo/entity'

let data = [
  {
    url: "https://www.bizjournals.com/southflorida/print-edition/2013/06/21/40-under-40-honorees-s-w.html?s=print",
    image: {
      src: "/assets/frontend/journals/sfbj.jpg",
      alt: "South Florida Business Journal"
    }
  },
  {
    url: "http://coatingspromag.epubxp.com/i/699177-jul-2016/14",
    image: {
      src: "/assets/frontend/journals/coatings%20pro.jpg",
      alt: "Coatings Pro"
    }
  },
  {
    url: "http://enewsletters.constructionexec.com/riskmanagement/2017/08/get-it-right-or-lose-payment-rights-navigating-bond-notices-and-bond-claims-on-construction-projects/?utm_source=volume_6_issue_17&amp;utm_campaign=risk_management&amp;utm_medium=email&amp;utm_term=title_article_5&amp;utm_content=%5BUSERID%5D",
    image: {
      src: "/assets/frontend/journals/CE.jpg",
      alt: "CE"
    }
  },
  {
    url: "/",
    image: {
      src: "/assets/frontend/journals/Construction%20association.jpg",
      alt: "Construction Association"
    }
  },
];



let buildEntity = (attrs) => {
  let attributes = {
    id: 1,
    type: 'publications',
    attributes: attrs
  }
  return new JsonApiEntity(attributes)
}

export const homePagePublications: any[] = _.map(data, buildEntity)
