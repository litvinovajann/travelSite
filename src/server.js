import { createServer } from "miragejs"
createServer({
    routes() {
      this.namespace = "api"
      this.logging = false
      this.get("/destinations", () => {
        return {
          destinations: [
            { id: "0", img: img, title:"Maldives", location:"southwest of Sri Lanka and India", grade:"LUXURY VACATION", fees: "$7899", description: "The Maldives is famous for a number of reasons, including its vibrant culture, pristine beaches, sprawling greenery, and fascinating landmarks. Apart from the numerous enchanting landmarks, Maldives is also famous for water sports and other adventure activities."},
            { id: "1", img: img1, title:"Vietnam", location:"eastern edge of mainland Southeast Asial", grade:"EXPLORE THE NATURE'S WONDERS", fees: "$4000", description: "Vietnam is one of the favorite countries of travelers that go to Asia. People are so friendly and resilient, food is very delicious and the places are simply amazing, from famous sceneries like Halong Bay to beautiful cities like Hanoi and Hoi An. Vietnam has so much to offer."},
            { id: "2", img: img2, title:"Sri Lanka", location:"Indian Ocean, southwest of the Bay of Bengal", grade:"EXPLORE THE NATURE'S WONDERS", fees: "$3999", description: "Known by a flotilla of aliases, the Resplendent Isle is one of gorgeous beaches, tea plantations and ancient cities. Scuba dive, visit an elephant orphanage and a lagoon of singing fish, explore dense jungle, shrines and temples. Situated just 20 miles off India, the island formerly known as Ceylon is home to 20 million people and eight World Heritage sites. The country's long, brutal civil war ended in May, 2009, bringing peace, stability and a revival of tourism."},
            { id: "3", img: img3, title:"Thailand", location:"bordered to the north by Myanmar and Laos, to the east by Laos and Cambodia", grade:"CULTURAL RELAX", fees: "$3999", description: "Thailand is home to Buddhist temples, exotic wildlife and spectacular islands. It is also known for its fascinating history, unique culture and delectable local food. The tourism industry plays an important role in the Thai economy and contributes an estimated 18.4 percent to the national GDP."},
            { id: "4", img: img, title:"Bora Bora", location:"French Polynesia", grade:"LUXURY VACATION", fees: "$12000", description: ""} 
          ],
        }
      })
    },
  })