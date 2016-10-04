# Bill Splitter

Client application for Bill-Splitter, a mobile-first browser app that splits
your restaurant tab into fair shares based on who had what.

## Why Bill-Splitter?

Have you ever been out at a restaurant and wanted to order a more expensive dish
than your friends were getting, but felt like you couldn't because it would
make it too hard to split up the tab fairly? Have you ever want to order that
top-shelf whiskey, but felt pressured to stick to beer like your friends?

You should be allowed to treat yourself. And you should never have to spend as
much time dividing up the check as you did eating the meal.

## How does it work?

This prototype incorporates the basic functionality required to gather
information about a restaurant tab from a user, then split it into shares.

After creating an account and signing in, the you are prompted to either create
a new bill, or look up an saved bill. If you opt to create a new bill, you are
guided through a series of questions about how many people you're out with,
their names, and the total cost of the meal.

Bill-Splitter takes all that information and passes it to a dedicated API, which
creates a Bill object on a remote database and marks it as belonging to your
account. Then the app splits the returned Bill into equal shares and displays
each person's share in a Share Summary view.

From the Share Summary, users can control their data by adjusting the bill
total, saving the bill, or deleting. From the main menu, users can also access
older saved bills, by either viewing them all in a list or looking them up
individually.


## Developing Bill-Splitter

The following links show some of the planning resources that were generated to
guide the development of Bill-Splitter:

[User Stories](./documentation/user_stories.md)
[Wireframes](./documentation/wireframes/)

The prototype was developed with a simple goal: deploy a client and API capable
of gathering basic information about a restaurant tab and displaying an equal
breakdown of shares. With this framework in place, additional features could be
implemented to provide users with share-adjustment options corresponding to
the common restaurant payment stories that inspired the app.

I build the client and API in tandem, building and deploying each one with basic
authentication, and running tests to ensure that the two could communicate and
that user information was protected.

With this skeleton in place, I began building out the Bill resource and adding
different view states to the client. Each new feature corresponded roughly to
one of the wireframed user flows.

After each major feature was completed, I redeployed and ensured that all
new functionality was maintained in the deployed app.

A number of more complex features had to remain in the icebox while I built the
app's two core features: creating a new bill, and looking up a saved bill. See
below for some planned additions to future versions of Bill-Splitter.

## Unsolved Problems

In this first working prototype of Bill-Splitter, users can only split a bill
evenly. The next step is to allow individual shares to be adjusted from the
Share Summary view. This will be accomplished by modeling Share objects in the
Bill-Splitter API and writing custom business logic to adjust the amounts owed
based on common restaurant scenarios, such as "Bill didn't eat any of the
nachos", or "I had the $20 whiskey, but everyone else drank $6 draft beer".

Once this functionality is in place, I plan to make the Bill-Splitter social,
allowing users to invite other users as friends, and to share ownership of a
given bill through friendships.

The social feature opens the door to further possiblities. Since each share of
a given bill would be attached to a registered user with an email address,
finalizing a bill could potentially generate automatic payment requests via a
third-party API such as Venmo or Circle.
