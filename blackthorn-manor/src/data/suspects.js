export const suspects = [
  {
    id: 1,
    name: "Victoria Blackthorn",
    image: "/images/suspects/victoria.jpg",
    relation: "Daughter",
    motive: "Inheritance",
    alibi: "I was reading in the library.",
    questions: [
      {
        id: 1,
        text: "Where were you at 11:47 PM?",
        answer: "I was reading in the library."
      },
      {
        id: 2,
        text: "Did you argue with Edward?",
        answer: "Yes, but it wasn't serious."
      },
      {
        id: 3,
        text: "Were you expecting to inherit?",
        answer: "I assumed I would receive something."
      },
      {
        id: 4,
        text: "Why were you arguing with your father?",
        answer:
          "He was changing his will and we disagreed.",
        requiredClue: "Secret Diary"
      }
    ]
  },

  {
    id: 2,
    name: "James Carter",
    image: "/images/suspects/james.jpg",
    relation: "Business Partner",
    motive: "Financial Dispute",
    alibi: "I was in the dining hall.",
    questions: [
      {
        id: 1,
        text: "Where were you at 11:47 PM?",
        answer:
          "I was reviewing documents in the dining hall."
      },
      {
        id: 2,
        text: "Why were you arguing with Edward?",
        answer:
          "We disagreed about the future of the company.",
        requiredClue: "Torn Photograph"
      },
      {
        id: 3,
        text: "Did you know about the will?",
        answer:
          "Only what everyone else knew."
      },
      {
        id: 4,
        text: "Were you in the study that night?",
        answer:
          "Only briefly before dinner."
      },
      {
        id: 5,
        text: "Can you explain the missing company funds?",
        answer:
          "I have no idea what you're talking about.",
        requiredClue: "Bank Statement"
      },
      {
        id: 6,
        text: "Why did Edward receive threatening letters?",
        answer:
          "I wouldn't know anything about that.",
        requiredClue: "Burned Letter"
      }
    ]
  },

  {
    id: 3,
    name: "Margaret Hill",
    image: "/images/suspects/margaret.jpg",
    relation: "Housekeeper",
    motive: "Hidden Secret",
    alibi: "I was cleaning the guest rooms.",
    questions: [
      {
        id: 1,
        text: "Where were you during the murder?",
        answer:
          "Upstairs cleaning the guest rooms."
      },
      {
        id: 2,
        text: "Did Edward trust you?",
        answer:
          "I've worked here for twenty years."
      },
      {
        id: 3,
        text: "What did you hear that night?",
        answer:
          "I heard shouting from the study."
      },
      {
        id: 4,
        text: "Did you see anyone enter the study?",
        answer:
          "I saw James heading toward the study shortly before the shouting began.",
        requiredClue: "Broken Watch"
      }
    ]
  },

  {
    id: 4,
    name: "Dr. Richard Hale",
    image: "/images/suspects/richard.jpg",
    relation: "Family Physician",
    motive: "Blackmail",
    alibi: "I was preparing medicine in the guest wing.",
    questions: [
      {
        id: 1,
        text: "Where were you at 11:47 PM?",
        answer:
          "I was organizing medical supplies."
      },
      {
        id: 2,
        text: "Why were you visiting the manor?",
        answer:
          "Edward requested a medical consultation."
      },
      {
        id: 3,
        text: "Did Edward seem worried recently?",
        answer:
          "Very worried. He appeared stressed for weeks."
      },
      {
        id: 4,
        text: "Did anyone visit Edward that evening?",
        answer:
          "Several guests met him privately."
      },
      {
        id: 5,
        text: "Why was Edward so stressed?",
        answer:
          "He believed someone close to him was betraying him.",
        requiredClue: "Secret Diary"
      }
    ]
  },

  {
    id: 5,
    name: "Thomas Reed",
    image: "/images/suspects/thomas.jpg",
    relation: "Gardener",
    motive: "Revenge",
    alibi: "I was locking the greenhouse.",
    questions: [
      {
        id: 1,
        text: "Where were you during the murder?",
        answer:
          "I was securing the greenhouse for the night."
      },
      {
        id: 2,
        text: "Did you get along with Edward?",
        answer:
          "Not always. We argued occasionally."
      },
      {
        id: 3,
        text: "Why were your boots muddy?",
        answer:
          "I work outside every day.",
        requiredClue: "Muddy Footprint"
      },
      {
        id: 4,
        text: "Did you enter the manor that night?",
        answer:
          "Only through the kitchen entrance."
      },
      {
        id: 5,
        text: "Did you find this glove?",
        answer:
          "I've never seen that glove before.",
        requiredClue: "Blood-Stained Glove"
      }
    ]
  }
];