import React from "react";
import styled from "styled-components";

const Form = () => {
  return (
    <StyledWrapper>
      <form className="form">
        <span className="title">Subscribe to our newsletter.</span>
        <div>
          <input
            placeholder="Enter your email"
            type="email"
            name="email"
            id="email-address"
          />
          <button type="submit">Subscribe</button>
        </div>
      </form>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .form {
    display: flex;
    flex-direction: column;
    background: #606c88;
    background: -webkit-linear-gradient(
      to right,
      rgb(65, 107, 63),
      rgb(96, 136, 119)
    );
    background: linear-gradient(to right, rgb(63, 107, 95), rgb(96, 136, 130));
    padding: 20px;
    border-radius: 10px;
    max-width: 350px;
  }

  .title {
    font-size: 24px;
    line-height: 2rem;
    font-weight: 700;
    letter-spacing: -0.025em;
    color: #fff;
  }
  .form div {
    display: flex;
    max-width: 28rem;
    margin-top: 1rem;
    column-gap: 0.5rem;
  }

  .form div input {
    outline: none;
    line-height: 1.5rem;
    font-size: 0.875rem;
    color: rgb(255 255 255);
    padding: 0.5rem 0.875rem;
    background-color: rgba(5, 113, 5, 0);
    border: 1px solid rgb(225, 225, 225);
    border-radius: 0.375rem;
    flex: 1 1 auto;
  }

  .form div input::placeholder {
    color: rgb(216, 212, 212);
  }

  .form div input:focus {
    border: 1px solid rgb(1, 254, 64);
  }

  .form div button {
    color: #fff;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.25rem;
    padding: 0.625rem 0.875rem;
    background-color: #0ca50c;
    border-radius: 0.375rem;
    border: none;
    outline: none;
  }
`;

export default Form;
