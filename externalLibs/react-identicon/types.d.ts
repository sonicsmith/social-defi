import type { Prefix } from '@polkadot/util-crypto/address/types';
import React from 'react';
export interface BaseProps {
    className?: string;
    style?: React.CSSProperties;
}
export interface Props extends BaseProps {
    address: string;
    isAlternative?: boolean;
    className?: string;
    publicKey: string;
    size: number;
    style?: React.CSSProperties;
}
export interface IdentityProps extends BaseProps {
    Custom?: React.ComponentType<Props>;
    isAlternative?: boolean;
    isHighlight?: boolean;
    onCopy?: (value: string) => void;
    prefix?: Prefix;
    size?: number;
    theme?: IconTheme;
    value?: string | Uint8Array | null;
}
export declare type IconTheme = 'beachball' | 'empty' | 'ethereum' | 'jdenticon' | 'polkadot' | 'substrate';
