# Home Order
## By Gator Delivery

We are Gator Delivery, a team of five individuals enrolled in CEN3031 Introduction to Software Engineering at the University of Florida during the summer 2020 term.

We have created HomeOrder to provide an easy way for home owners to get jobs done that they are not able to do themselves. We wish to target users who needs a job done in plumbing, flooring, electrical, HVAC, and many other types of work that usually needs a handyman to complete. We also want to provide a platform for handyman that wish to volunteer their free time to help residents in their area. Visit [HomeOrder](https://home-order-gatordelivery.herokuapp.com/).

### How to run

If you would like to run HomeOrder locally on your machine, execute the following instrucionts once the project is cloned and you are in the project folder:

```
npm install
npm run client-install
npm run dev
```

#### How to deploy

HomeOrder is fully ready to be deployed on Heroku. Just clone clone the repo and connect your Heroku account with your GithUb repo.


### Features

HomeOrder contains the following features:

* **Homeowners can create a post describing their job:** 
Homeowners are able to create a post that will contain a headline of the job, a full description of the job, what trade the job relates to (also an “I don’t know” choice), and a timeframe for when they want the job completed/worked on.

* **Homeowners can view their job posts:**
Homeowners can see each job post they have made on their homepage in a list view.

* **Homeowners can delete their job posts:**
Homeowners are able to select individual job posts and can delete the job posts at anytime. 
 
* **Homeowners can View FAQ for Assistance:**
Homeowners can see frequently asked questions if they are having trouble navigating the page, choosing a trade for their job post, or any other miscellaneous topic.

* **Homeowners can post on the community board:**
Homeowners are able to create a post where they can ask a question about a home project. They can ask for help on what their problem might be and who might be the best handyman to help with that.

* **Homeowners can view other homeowner's posts on the community board:**
You can see what other users have posted to create a community within the app to discuss issuer they’re having or to help answer any questions you know.

* **Sign up as a volunteer or regular customer:**
Users can choose on the sign up page how they will be using the app, in order to show them the relevant info pertaining to the role. A homeowner will choose regular customer, while a voluntter will choose volunteer handyman.

* **Users can view their profile settings:**
Any users can view account settings, such as their name, description, and other PII to then be able to update and change it.

### Navigation

Once logged in as any type of user, the navbar located at the top of the screen will be where any page can be accessed. 

* You will see a "Create job" link where it will redirect you to the job submission form. Here, as a regular customer, you will enter the type of job you need done. You will also enter the details of your job and a short, one sentence title that will act as a headline which volunteers will see first when viewing the jobs. You will aslo enter your zipcode and the date you wish for the job to be completed.

* You will be able to view a community board where you can ask other homeowners and volunteers any question you might have about your job.

* You will be able to view the FAQ page to look at the most frequently asked questions.

* You will also be able to view the review board, where you can see indiviudalized reviews on the volunteers who use HomeOrder.

### API

HomeOrder uses the following APIs:

* Mongoose
  * Connection with MongoDB Atlas databse
* Google Firebase
  *  Store user account information
* Axios
  * Make CRUD requests to information database

