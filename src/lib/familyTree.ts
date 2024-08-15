interface FamilyTree {
    avater: string
    name: string
    gender: string
    dob: string
    death?: string
    bio: string
    website?: string
    facebook?: string
    linkedIn?: string
}
export const familyTree : FamilyTree[] = [
    {
        avater: 'memberImg/anisafifi.jpeg',
        gender: 'Male',
        name: 'Anis Afifi',
        dob: '1998',
        bio: 'Full stack web developer, entrepreneur and businessman with a big dream to make the world a better place for humankind.',
        website: 'https://anisafifi.com',
        facebook: 'https://facebook.com/anisurrahmanafifi',
        linkedIn: 'https://linkedin.com/in/anisurrahmanafifi'
    },
    {
        avater: 'memberImg/tamannaafifi.jpg',
        name: 'Tamanna Afifi',
        gender: 'Female',
        dob: '2007',
        bio: 'with a big dream to make the world a better place for humankind.'

    }
]