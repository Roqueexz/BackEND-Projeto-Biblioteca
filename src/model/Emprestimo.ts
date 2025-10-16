class Emprestimo {
    private id_emprestimo: number;
    private id_aluno: number;
    private id_livro: number;
    private data_emprestimo: Date;
    private data_devolucao: Date;
    private status_emprestimo: string;

    constructor(
        id_emprestimo: number,
        id_aluno: number,
        id_livro: number,
        data_emprestimo: Date,
        data_devolucao: Date,
        status_emprestimo: string
    ) {
        this.id_emprestimo = id_emprestimo;
        this.id_aluno = id_aluno;
        this.id_livro = id_livro;
        this.data_emprestimo = data_emprestimo;
        this.data_devolucao = data_devolucao;
        this.status_emprestimo = status_emprestimo;
    }

    public getIdEmprestimo(): number {
        return this.id_emprestimo;
    }
    public setIdEmprestimo(id_emprestimo: number): void {
        this.id_emprestimo = id_emprestimo;
    }

    public getIdAluno(): number {
        return this.id_aluno;
    }
    public setIdAluno(id_aluno: number): void {
        this.id_aluno = id_aluno;
    }

    public getIdLivro(): number {
        return this.id_livro;
    }
    public setIdLivro(id_livro: number): void {
        this.id_livro = id_livro;
    }

    public getDataEmprestimo(): Date {
        return this.data_emprestimo;
    }
    public setDataEmprestimo(data_emprestimo: Date): void {
        this.data_emprestimo = data_emprestimo;
    }

    public getDataDevolucao(): Date {
        return this.data_devolucao;
    }
    public setDataDevolucao(data_devolucao: Date): void {
        this.data_devolucao = data_devolucao;
    }

    public getStatusEmprestimo(): string {
        return this.status_emprestimo;
    }
    public setStatusEmprestimo(status_emprestimo: string): void {
        this.status_emprestimo = status_emprestimo;
    }
}

export default Emprestimo;
