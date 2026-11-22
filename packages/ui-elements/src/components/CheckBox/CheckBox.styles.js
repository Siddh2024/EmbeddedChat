import { css } from '@emotion/react';

const getCheckBoxStyles = (
  theme,
  { checked = false, disabled = false } = {}
) => {
  const styles = {
    main: css`
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: ${theme.colors.primaryForeground};
      background-color: ${checked ? theme.colors.primary : 'transparent'};
      height: 1rem;
      width: 1rem;
      box-sizing: border-box;
      border: ${checked ? 'none' : `2px solid ${theme.colors.border}`};
      border-radius: ${theme.radius};
      cursor: ${disabled ? 'not-allowed' : 'pointer'};
      opacity: ${disabled ? 0.5 : 1};
      outline: none;
      vertical-align: middle;

      &:has(input:focus-visible) {
        outline: 2px solid
          ${theme.colors.ring || theme.colors.primary || 'currentColor'};
        outline-offset: 2px;
      }
    `,
    input: css`
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
      opacity: 0;
      cursor: inherit;

      &:focus-visible + span {
        outline: 2px solid
          ${theme.colors.ring || theme.colors.primary || 'currentColor'};
        outline-offset: 2px;
      }
    `,
    box: css`
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      pointer-events: none;
    `,
  };

  return styles;
};

export default getCheckBoxStyles;
