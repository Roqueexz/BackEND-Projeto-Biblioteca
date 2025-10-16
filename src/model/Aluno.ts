class Aluno {
    private id_aluno: number;
    private nome: string;
    private sobrenome: string;
    private ra: string;
    private data_nascimento: Date;
    private email: string;
    private celular: number;

    constructor(id_aluno: number, nome: string, sobrenome: string, ra: string, data_nascimento: Date, email: string, celular: number) {
        this.id_aluno = id_aluno;
        this.nome = nome;   
        this.sobrenome = sobrenome;
        this.ra = ra;
        this.data_nascimento = data_nascimento;
        this.email = email;
        this.celular = celular;
    }

    public getIdAluno(): number {
        return this.id_aluno;
    }
    public setIdAluno(id_aluno: number): void {
        this.id_aluno = id_aluno;
    }

    public getNome(): string {
        return this.nome;
    }
    public setNome(nome: string): void {
        this.nome = nome;
    }
    public getSobrenome(): string {
        return this.sobrenome;
    }
    public setSobrenome(sobrenome: string): void {
        this.sobrenome = sobrenome;
    }
    public getRa(): string {
        return this.ra;
    }
    public setRa(ra: string): void {
        this.ra = ra;
    }
    public getDataNascimento(): Date {
        return this.data_nascimento;
    }
    public setDataNascimento(data_nascimento: Date): void {
        this.data_nascimento = data_nascimento;
    }
    public getEmail(): string {
        return this.email;
    }
    public setEmail(email: string): void {
        this.email = email;
    }
    public getCelular(): number {
        return this.celular;
    }
    public setCelular(celular: number): void {
        this.celular = celular;
    }
}



export default Aluno;
