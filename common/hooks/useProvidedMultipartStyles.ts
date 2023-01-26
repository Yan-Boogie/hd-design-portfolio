import { createContext, useContext } from 'react';
import type { SystemStyleObject, CSSWithMultiValues } from '@chakra-ui/react';

export const StylesProvider = createContext<Record<string, SystemStyleObject>>({});

function useProvidedMultipartStyles(): Record<string, SystemStyleObject>;
function useProvidedMultipartStyles(options: { name: string }): CSSWithMultiValues;
function useProvidedMultipartStyles(options?: { name: string }) {
    const name = options?.name;

    const styles = useContext(StylesProvider);

    return name ? styles[name] : styles;
}

export default useProvidedMultipartStyles;
