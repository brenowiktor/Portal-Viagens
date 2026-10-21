export interface Destino {
  id: number;
  nome: string;
  imagem: string;
  descricao: string;
}

export const destinos: Destino[] = [
  { id: 1, nome: "Rio de Janeiro", imagem: "https://picsum.photos/id/1011/400/250", descricao: "Praias, Cristo Redentor e muita vida cultural." },
  { id: 2, nome: "Paris", imagem: "https://picsum.photos/id/1015/400/250", descricao: "Torre Eiffel, museus e gastronomia." },
  { id: 3, nome: "Tóquio", imagem: "https://picsum.photos/id/1016/400/250", descricao: "Tradição e tecnologia lado a lado." },
  { id: 4, nome: "Nova York", imagem: "https://picsum.photos/id/1018/400/250", descricao: "A cidade que nunca dorme." },
];