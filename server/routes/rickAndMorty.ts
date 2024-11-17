import axios from 'axios';
import { z } from 'zod';
import { wrapSuccess, trpc } from '../utils';
export const charactersRouter = trpc.router({
  getCharacter: trpc.procedure
    .input(z.object({ params: z.object({ id: z.number() }) }))
    .query(async ({ input }) => {
      const charactersResponse = await axios<Result<Character>>(
        `https://rickandmortyapi.com/api/character/${input.params.id}`,
      );

      return wrapSuccess(charactersResponse);
    }),
  getCharacters: trpc.procedure
    .input(
      z
        .object({
          params: z
            .object({
              multiple: z.string().optional(),
              page: z.number(),
            })
            .optional(),
          filters: z
            .object({
              status: z
                .union([z.literal('alive'), z.literal('dead'), z.literal('unknown')])
                .optional(),
            })
            .optional(),
        })
        .optional(),
    )
    .query(async ({ input }) => {
      const charactersResponse = await axios<Result<Character>>(
        `https://rickandmortyapi.com/api/character/${input?.params?.multiple ?? ''}`,
        {
          params: { ...input?.filters, page: input?.params?.page },
        },
      );
      return wrapSuccess(charactersResponse.data);
    }),
});
