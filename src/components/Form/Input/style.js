import styled from "styled-components";

export const StyledInput = styled.div`
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 71px;

  label {
    white-space: nowrap;
    align-self: flex-start;
  }

  input {
    border-radius: 4px;
    padding: 11px;
    border: 1px solid #cccccc;
    width: ${(props) => (props.short ? "87%" : "95%")};


    :focus {
      box-shadow: 0 0 0 0;
      border: 1px solid #cccccc;
      outline: 0;
    }
    ::placeholder {
      color: #cccccc;
      font-size: 14px;
    }

    .error {
      color: aliceblue;
    }
    @media (min-width: 768px) {
      width: ${(props) => (props.short ? "89%" : "95%")};
      ::placeholder {
        font-size: 16px;
      }

    }
    @media (min-width: 1024px) {
      ::placeholder {
        font-size: 16px;
      }
    }

  }
`;
