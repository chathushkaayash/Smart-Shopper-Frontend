import { useMutation, useQueryClient } from "@tanstack/react-query";

import { CACHE_KEY_TODOS } from "../constants";
import todoService, { Todo } from "../services/todoService";

interface AddTodoContext {
  previousTodos: Todo[];
}

const useAddTodos = (onAdd: () => void) => {
  const queryClient = useQueryClient();

  return useMutation<Todo, Error, Todo, AddTodoContext>({
    mutationFn: todoService.create,

    onMutate: (newTodo: Todo) => {
      // Save the data to be able to roll back
      const previousTodos =
        queryClient.getQueryData<Todo[]>(CACHE_KEY_TODOS) || [];

      // Optimistically update the cache
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos = []) => [
        newTodo,
        ...todos,
      ]);

      // Reset the input field
      // if (ref.current) ref.current.value = "";
      onAdd();

      // Return the previous todos to the context
      return { previousTodos };
    },

    onSuccess: (savedTodo, newTodo) => {
      queryClient.setQueriesData<Todo[]>(CACHE_KEY_TODOS, (todos) =>
        todos?.map((todo) => (todo === newTodo ? savedTodo : todo))
      );
    },

    onError: (error, newTodo, context) => {
      if (!context) return;

      // Roll back the cache
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, context.previousTodos);
    },
  });
};

export default useAddTodos;
