Voting application

To use this application you need to run these commands

- Have .env file with correct database URL

- npx drizzle-kit push

- npm run dev

- npm run seed

# Final assignment v2.2

You will build a voting application to visualize the impact of your vote in a representative democracy.

The challenge will focus on code quality and how to vertically slice your features.

Seeding relevant data will also be of importance.

## Background

You will build an app for a representative democracy where a crowd of public voters will be represented by a smaller group of professional representative voters.

The representative voters will place all their public votes they have gained when voting on a choice in an election.

An election will have multiple choices to vote on, and the choice with most public votes win..

---

## Specification

### Representative voters management

1. There should be a list of registered representative voters that the public can place their vote on.
2. Representatives can be added to the list. They should have a name and email. Email needs to be unique.

### Public voting on representatives

1. Public voters can vote for a new representative at any point in time without the need of a public election.
2. Elections created before the public vote on a representative are not affected.

### Public preference statistics

1. Public voters can select an election choice that they prefer.

### Elections management

1. There should be a list of elections from latest to oldest.
2. Users can create an election to vote for.
3. Users can mark an election as concluded. Voting is then done.

### Election voting

1. Representative voting is publicly available information.
2. The public should be able to see how many votes a representative gained. The identities of the public voters should be protected.

### Election results

1. An election should show the number of public votes that got placed on each choice.
2. It should be clear which choice had the most number of public votes, and thus is the winning choice.
3. Each election should show a list with the representatives that voted, what they voted on, and how many public votes they voted with.
4. Each election should show the agreement rate for each representative.

### Seeding data

1. The application should seed up relevant data for a time span of 4 years so the application makes sense for someone who visits it. Seeding should be done via the service layer and it should be applied when running `npm run seed`.

---

## Example

Representative Andrea has 10 public votes.
Representative Beatrice has 20 public votes.

An election is created to decide between cats or dogs being allowed at the office.

Andrea votes Cats. Cats gets 10 public votes.
Beatrice votes on Dogs. Dogs gets 20 public votes.

The choice of dogs win with 20 public votes.

---

## Requirements

- Tech stack: Next.js, TypeScript, Drizzle, Postgres, Zod, ESLint, Prettier.
- A readme explaining your big-picture plan.
- A GitHub planning board with sprint goals (done columns) where it's simple to understand how you divided your work in larger chunks. _Do not miss this requirement, as it would mean that you need to write a whole new project just to be able to plan it properly._
- Good UI design, including good choice of font, color, responsive layout, and component design. The design does not need to be original. Just high quality.
- Semantic HTML.
- Tidy code.
- Feature sliced architecture.
- Routing layer separated from the service layer.
- Functional core separated from the imperative shell.
- All business logic should be tested with unit tests.
- Proper commits using micro-steps with clear expectations.

---

## Project scope limitations

- Authentication and access management are out of scope for this project. In this basic version, all users has full access to everything.
- Issues present in production mode will not be taken into account. The application should work in development mode (`npm run dev`).
- Error handling in server actions are out of scope as there’s very little information in Next.js’ documentation.
- There’s no notion of democratic parties in this assignment. The public votes will go straight to a single representative. In real life, the votes would go to a party.

Big picture plan
![alt text](image.png)
