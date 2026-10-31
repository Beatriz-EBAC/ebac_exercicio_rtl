import { fireEvent, render, screen } from '@testing-library/react';
import PostComments from '.';

describe('Teste para o componente PostComments', () => {
    it('Deve adicionar dois comentários corretamente', () => {
        render(<PostComments />);

        const campoComentario = screen.getByTestId('comment-input');
        const botaoComentar = screen.getByText('Comentar');

        fireEvent.change(campoComentario, {
            target: { value: 'Meu primeiro comentário' }
        });

        fireEvent.click(botaoComentar);

        fireEvent.change(campoComentario, {
            target: { value: 'Meu segundo comentário' }
        });

        fireEvent.click(botaoComentar);

        expect(screen.getByText('Meu primeiro comentário')).toBeInTheDocument();
        expect(screen.getByText('Meu segundo comentário')).toBeInTheDocument();

        expect(screen.getAllByTestId('comment-item')).toHaveLength(2);
    });
});