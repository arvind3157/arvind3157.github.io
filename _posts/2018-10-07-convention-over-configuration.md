---
title: Understanding convention over configuration from real life
---
<div style="text-align: justify">
How difficult it is sometimes to find your car key or your wallet in your room? Sometimes it's frustrating to go through the pain of not finding what we are looking for. It can be easily solved if we are ready to change a bit in our habits. This is what I have used for many years and it's so effective. Later I realized there is a term for that in software terminologies. It's called convention over configuration. One of the most popular web development framework Ruby on Rails built on this thought.
</div>
<div style="text-align: justify">
First, we will try to solve our problem in daily life. In your house, you have all the liberty to keep your stuff at any place. Having a liberty to keep the stuff at any place gives you flexibility, but it comes with some cost. The cost is the time you spend on searching for your belongings. The solution is very simple. Why not just define a rule where every stuff will be kept at a certain place? I don't need to tell that most of the time we are already following this process. You might have already defined where your shoes will be kept, where your slippers will be kept and where your car key will be kept etc. This is called convention over configuration.  
</div>
<div style="text-align: justify">
Now coming back to Ruby on Rails which follows convention over configuration principles. The framework has defined strict rule regarding where model, view controller files should be kept. Let's take a look at below screenshot of one Rails app project directory. Don't worry if you have no idea what Ruby on Rails is, I'm not going to talk anything technical here.    
</div>
<br>
![rails](/assets/images/Rails_Conventions_Over_Configuration.png)  

<div style="text-align: justify">
The editor shows where goes what. It only makes developers life easy. If you deviate from the convention you have to handle it separately, as I mentioned I earlier it comes with a cost.  

There are benefits of following this paradigm, any new person joining the team will take less time to understand the code base. Developers can focus on more creative things than deciding where shall I keep my code. The basic thing, modularising the code is already provided.  

There are other libraries (i.e. React.js) and framework that prefer to give control to the developers of defining the project structure. It is up to individuals who decide what culture and style they like to work with.
</div>