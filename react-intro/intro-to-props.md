can you please evaluate the following script and provide your notes on any relevant terms or definitions in this video or related to the subject for me to study?




0:00
(upbeat music)
0:04
- [Instructor] The components we've defined so far
0:06
are simple and they're also not that useful
0:09
because they're not really reusable.
0:11
Yeah, I guess random number is an example
0:13
where we can reuse it and get some different output
0:15
every time, but Shiba and what was that other one?
0:18
SharPei, we get the exact same output no matter what.
0:22
A reusable component is one
0:23
that is usually configurable or customizable.
0:26
We can pass in different data and have different outcomes.
0:29
So we'll see how we can write those types of components
0:31
using something called Props.
0:33
Props are in a central concept in React.
0:36
You'll use them all the time.
0:38
In most of your components, you'll use Props.
0:40
They stand for properties.
0:42
And the idea is that we can pass in arguments,
0:44
we can pass in values to a particular component.
0:48
So I could have a Dog component, which is not defined yet.
0:52
and not dig, oh boy, a Dog component.
0:56
And then I could pass in a name for that dog.
0:59
I could pass in a age, a breed or I could have a,
1:03
how about an Instagram post component.
1:06
An Instagram on those little squares
1:07
that we saw on Instagram's web App.
1:10
It could have an image URL, a username, number of comments,
1:14
whatever else, tons of stuff, a date, hashtags,
1:18
people who have been tagged in it.
1:19
We could put all of that as Props, values
1:22
that we pass in to our component.
1:24
And then in that component
1:25
we can use those Props and access them to manipulate
1:29
and change what we return, what the actual output is.
1:32
So there's two steps here,
1:34
one is passing the Props to a component,
1:36
and then the second step, is inside of the component,
1:39
accessing or using the Props, just like with a function.
1:43
We define different parameters when we write a function
1:46
and then we have to pass actual arguments in
1:49
when we execute a function.
1:50
So in React, when we define a component,
1:53
it will automatically be passed.
1:55
Anytime we're actually using that component,
1:57
it will automatically be passed in arguments
1:59
that will contain the Props.
2:01
Usually, we'll just call that Props.
2:03
You don't have to, it's just any other parameter
2:05
but Props is the standard name.
2:08
So why don't we make a animal component,
2:10
and our animal component will be passed in a name,
2:13
maybe a species, an emoji.
2:16
So let's do that in here.
2:18
New file Animal.JS.
2:22
I'll define it const Animal equals my arrow function.
2:26
but now we're going to capture whatever Props is.
2:29
So this will be passed in
2:31
if we're actually initializing an animal component,
2:34
and we add in any Props.
2:36
In this example, we have an order component,
2:38
and we would like for this order
2:41
to be able to accept an item and a restaurant.
2:44
So it should display something, like your order,
2:48
and then I'd like item from restaurant,
2:51
I'd like coffee from Starbucks.
2:53
So we'll fill in those two blinks.
2:55
To do that from within our component,
2:58
we'll access Props.item and Props.restaurant.
3:02
Now those have to be there.
3:03
We have to pass them in.
3:05
And the way that we pass Props in is slightly different.
3:08
We're not actually executing a function ourself,
3:10
or it doesn't look like we're executing a function.
3:13
When we render a component, we use the JSX syntax.
3:17
So we can't just add parentheses and pass in values.
3:20
Instead, we use what looks like HTML attribute syntax.
3:25
So something equals and then something else.
3:28
Restaurant equals Domino's, item equals pizza .
3:31
Restaurant is Panera, item equals bread.
3:35
So we pass in those key value pairs,
3:36
a name for a prop and then a value.
3:39
And React will automatically store those
3:42
and pass them together in this one argument
3:45
that we usually capture as Props.
3:47
And then we can access that object, Props.item,
3:50
Props.restaurant and embed the information,
3:53
the expression using the curly braces
3:55
directly inside of our JSX that we return.
3:58
So this Syntax again, equal sign, it is different,
4:01
it looks like HTML, that's kind of the point.
4:04
We're defining a component, but behind the scenes
4:06
it's just a function that React calls for us.
4:09
But this is how we pass in these Props, these arguments,
4:12
we don't pass them in like a traditional function,
4:14
like I'm doing right here.
4:15
For get element by ID, we pass them in
4:18
with this attribute syntax.
4:20
So let's try it.
4:21
Over here, I've got my animal component
4:24
which will be passed Props hopefully.
4:27
And what should we return?
4:29
For an animal, let's make a div.
4:32
And each animal is going to have a name,
4:35
like a pet name, Bonnie or I don't know, Elsa,
4:39
and then a species and an emoji.
4:43
And this is gonna take up multiple lines.
4:45
So it is just a single expression, a single div I'll return.
4:49
But if I want to space things out
4:51
and put them on multiple lines to make it easier to read,
4:54
I do need to wrap this entire div in parentheses like that.
4:59
And then what you'll see most often,
5:01
something like this here.
5:03
Okay, so return this div and inside of it,
5:07
let's put a h3, where we'll display Props.name,
5:13
and maybe above that we'll do an h1,
5:18
which will display Props.emoji.
5:22
So we'll need to pass in an emoji
5:23
like a chicken emoji or a dinosaur emoji.
5:26
And then we've got Props.name, why don't we do name colon.
5:31
And then another h3.
5:33
I don't know why I'm doing h3,
5:35
this really shouldn't be heading or headers.
5:37
Maybe I should refactor this to be a a LI or something,
5:41
but we'll deal with that later.
5:42
So here we'll put species.
5:46
And then props.species.
5:49
So if I were to instantiate a new animal right now
5:52
and render it, nothing is gonna show up.
5:54
We'll have markup, we'll have a div
5:56
and empty h1, empty h3, another empty h3.
5:59
Well, I guess actually they'll say name and species,
6:02
but my Props won't be showing up
6:03
unless I pass them in.
6:06
So let's go to my App JS
6:08
and we have our three random numbers.
6:10
We can keep that there I guess,
6:11
but let's put a animal up top and then I need to make sure
6:17
I actually include my animal script, Animal.js.
6:23
And I'm not passing any Props in,
6:24
so this is all we see, an empty h1 with the emoji,
6:28
an h3 that says name, another h3 that says species.
6:32
But now in our App JS, if we pass in
6:35
name equals using this syntax that we just saw,
6:39
something equals something else.
6:41
Let's do a name equals, I guess I'll do my chicken,
6:46
Stevie Chicks.
6:49
And then I'll also add in, what did I say?
6:52
Species equals Silkie Chicken, and then emoji
6:59
which will be an emoji that I'll pull up here,
7:02
if I can remember, how did we get that emoji picker?
7:05
There we go.
7:06
Let's look for chicken.
7:09
Let's go with that one right there.
7:11
Now, if you are on a PC or some platform
7:14
that doesn't have the same emojis,
7:16
this is really not that essential.
7:18
It's the same principle,
7:18
it's just a string at the end of the day
7:20
but you might run into some issues getting it to display.
7:23
If that's the case, just focus on these other Props.
7:26
You can remove emoji or put something else instead.
7:29
Okay, so now we have this animal component,
7:31
we've instantiated, we're rendering it,
7:33
and we're passing in different Props.
7:35
And then in our animal component, we are expecting Props,
7:39
and then we're looking for emoji name and species.
7:42
And there we go, wow, very ugly,
7:45
but we're getting this animal to show up.
7:47
Get our chicken emoji, Stevie Chicks is name,
7:50
Silkie Chicken is species.
7:52
Now let's add in a second animal below.
7:55
And what animals should we go with here?
7:58
Do we have a Fox?
8:00
Come on, emoji picker.
8:01
There we go.
8:03
Alright, let's do a Fox emoji.
8:05
This will be a Red Fox for species.
8:08
And then the Fox's name will be Patrick.
8:15
And now I have two animal components
8:18
but very different information,
8:19
same pattern, but different data.
8:22
Now you could take this concept and expand it
8:24
to something a lot more realistic, a Reddit post,
8:26
where you might have a hundred on a page,
8:28
they're all the same component
8:30
but different information is being displayed.
8:32
The number of upvotes, the date, the author, et cetera.
8:34
I think I'm gonna refactor this ever so slightly.
8:37
I am going to make this a UL instead
8:40
so it's a bit more manageable.
8:43
And then instead of that UL, we'll have a couple of LIs.
8:50
And that might be too small.
8:52
Yeah, that's fine enough.
8:54
Maybe I'll just display emoji here,
8:57
and let's take a look at that.
8:58
Here we go.
8:59
So now we have one animal component
9:01
and a second animal component.
9:04
What happens if we try and create an animal
9:06
where we don't pass something in,
9:08
like we skip out on name and species and we have emoji?
9:16
Well, they just end up as blanks.
9:18
They're going to be undefined values.
9:20
Props itself is just an object.
9:23
If we go into our animals component
9:25
and before we returned something,
9:27
I could console.log Props, refresh the page,
9:31
open up my dev tools.
9:33
This is what Props looks like, it's just an object.
9:36
So on the first two, we have name, species and emoji,
9:39
and on the last one, it's just emoji.
9:42
And I can pass in more Props.
9:44
You probably won't do this very often
9:46
but I could pass in something else that's not being used.
9:48
How about color equals white?
9:52
I'm not using it but React doesn't know that,
9:54
it doesn't care, it's really just taking
9:56
whatever these values are, key value pairs,
9:59
splitting up on the equal sign and turning them
10:02
into an object, passing that object in
10:04
as the argument to each individual animal.
10:08
So in our first Props object, we have name, species, emoji
10:12
and color, even though we're not using color.
10:15
So I'm gonna get rid of that,
10:16
and also because our component
10:18
is really just returning a single expression,
10:20
I'm gonna just refactor it.
10:22
As we've seen with an arrow function,
10:25
we can use the implicit return, use those parentheses,
10:28
and we can shorten up our arrow function a little bit,
10:30
and it still works just fine.
10:33
Okay, so that is our first intro to Props,
10:35
but we still have other things to discuss,
10:37
like what about other types of Props?
10:39
Can we pass a number or a Boolean or an array?
10:43
And then we also need to discuss default values for Props.
10:46
We'll talk about de-structuring.
10:47
And a very important thing about Props
10:49
we haven't even talked about yet,
10:50
which is that they cannot change.
10:52
They are immutable.
10:53
So that's all coming up.


can you please provide code snippets from the feedback you just provided to illustrate those concepts ? 