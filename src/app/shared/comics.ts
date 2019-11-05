export class Comics {
    id:          string;
    slug:        string;
    name:        string;
    description: string;
    issueNumber: string;
    pages:       string;
    price:       string;
    releaseDate: string;
    image:       string;
    characters:  Character[];
}

export class Character {
    id:            string;
    name:          string;
    description:   string;
    numberOfRoles: string;
    isGood:        string;
    image:         string;
}
