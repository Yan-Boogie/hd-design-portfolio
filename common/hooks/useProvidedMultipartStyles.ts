import { createContext, useContext } from 'react';
import type { SystemStyleObject } from '@chakra-ui/react';

export const StylesProvider = createContext<Record<string, SystemStyleObject>>({});

function useProvidedMultipartStyles({ name }: { name: string }) {
    const styles = useContext(StylesProvider);

    return styles[name];
}

export default useProvidedMultipartStyles;