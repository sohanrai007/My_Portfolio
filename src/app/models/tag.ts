export class Tag {
    static readonly Angular = new Tag('Angular', 'Red');
    static readonly TypeScript = new Tag('TypeScript', 'Grey')
    static readonly react = new Tag('react', 'blue')
    static readonly CSharp = new Tag('C#', 'black')
    static readonly DotNet = new Tag('.NET', 'Purple')



    private constructor(private readonly key: string, public readonly color: string) {

    }
    toString() {
        return this.key
    }
}