class Livro {
    private id_livro: number;
    private titulo: string;
    private autor: string;
    private editora: string;
    private ano_publicacao: number;
    private isbn: string;
    private quant_total: number;
    private quant_disponivel: number;
    private valor_aquisicao: number;
    private status_livro_emprestimo: boolean;

    constructor(id_livro: number, titulo: string, autor: string, editora: string, ano_publicacao: number, isbn: string, quant_total: number, quant_disponivel: number, valor_aquisicao: number, status_livro_emprestimo: boolean) {
        this.id_livro = id_livro;
        this.titulo = titulo;
        this.autor = autor;
        this.editora = editora;
        this.ano_publicacao = ano_publicacao;
        this.isbn = isbn;
        this.quant_total = quant_total;
        this.quant_disponivel = quant_disponivel;
        this.valor_aquisicao = valor_aquisicao;
        this.status_livro_emprestimo = status_livro_emprestimo;
    }

    public getIdLivro(): number {
        return this.id_livro;
    }
    public setIdLivro(id_livro: number): void {
        this.id_livro = id_livro;
    }
    public getTitulo(): string {
        return this.titulo;
    }
    public setTitulo(titulo: string): void {
        this.titulo = titulo;
    }
    public getAutor(): string {
        return this.autor;
    }
    public setAutor(autor: string): void {
        this.autor = autor;
    }
    public getEditora(): string {
        return this.editora;
    }
    public setEditora(editora: string): void {
        this.editora = editora;
    }
    public getAnoPublicacao(): number {
        return this.ano_publicacao;
    }
    public setAnoPublicacao(ano_publicacao: number): void {
        this.ano_publicacao = ano_publicacao;
    }
    public getIsbn(): string {
        return this.isbn;
    }
    public setIsbn(isbn: string): void {
        this.isbn = isbn;
    }
    public getQuantTotal(): number {
        return this.quant_total;
    }
    public setQuantTotal(quant_total: number): void {
        this.quant_total = quant_total;
    }
    public getQuantDisponivel(): number {
        return this.quant_disponivel;
    }
    public setQuantDisponivel(quant_disponivel: number): void {
        this.quant_disponivel = quant_disponivel;
    }
    public getValorAquisicao(): number {
        return this.valor_aquisicao;
    }
    public setValorAquisicao(valor_aquisicao: number): void {
        this.valor_aquisicao = valor_aquisicao;
    }
    public getStatusLivroEmprestimo(): boolean {
        return this.status_livro_emprestimo;
    }
    public setStatusLivroEmprestimo(status_livro_emprestimo: boolean): void {
        this.status_livro_emprestimo = status_livro_emprestimo;
    }
}

export default Livro;
    