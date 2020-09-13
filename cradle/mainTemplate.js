module.exports = [
    {
        id: 'NAME',
        title: 'Name',
        prompt: `What's your name?`,
        fields: [
            {
                placeholder: 'First Name',
                type: 'text'
            },
            {
                placeholder: 'Last Name',
                type: 'text'
            }
        ]
        
    },
    {
        id: 'PHONE',
        title: 'Phone',
        prompt: `What's your phone number?`,
        fields: [
            {
                placeholder: 'Your phone number',
                type: 'phone'
            }
        ]
    },
    {
        id: 'EMAIL',
        title: 'Email',
        prompt: `What's your email?`,
        fields: [
            {
                placeholder: 'Your email address',
                type: 'text'
            }
        ]
    },
    {
        id: 'ABOUT',
        title: 'Tell us about your self',
        prompt: `What type of passenger are you?`,
        fields: [
            {
                placeholder: 'Write a little bit about yourself. Do you like chatting? Are you a smoker? Do you bring pets with you? Etc.',
                type: 'textarea'
            }
        ]
    }
];