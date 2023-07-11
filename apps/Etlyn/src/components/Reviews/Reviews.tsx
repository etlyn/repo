// @ts-nocheck

import React from "react";
import { ReviewCard } from "../ReviewCard";
import "./style.css";

interface Props {
  isMob: boolean;
}

export const Reviews = ({ isMob }: Props): JSX.Element => {
  return (
    <div className={`reviews is-mob-${isMob}`}>
      {!isMob && (
        <>
          <p className="title">What people say about Etlyn</p>
          <div className="div">
            <ReviewCard
              image="https://generation-sessions.s3.amazonaws.com/56d13f1491cdc16344f770af03add974/img/image-12@2x.png"
              text="Bettina Donmez"
              text1={
                <>
                  E-Commerce Platform Development
                  <br />
                  PUMA
                </>
              }
              text2="We use Etlyn in every single one of our projects that requires content management. Our clients love it. Over the years we found out it covers so many use cases, be it a simple website, a web app, e-commerce or mobile app. It is easy and intuitive to use, makes content management enjoyable, and empowers marketers to work without constant involvement of designers and developers."
            />
            <ReviewCard
              hasAction={false}
              image="https://generation-sessions.s3.amazonaws.com/56d13f1491cdc16344f770af03add974/img/image-10@2x.png"
              text="Ashley Brooks"
              text1={
                <>
                  E-commerce Operations Manager @<br />
                  AETHER Apparel
                </>
              }
              text2="Etlyn lets us say yes to our creative ideas. I&#39;m so used to hearing, &#34;no, that&#39;s not possible on this platform&#34;. Not anymore! It&#39;s an awesome feeling and has really opened up how we think about engaging with our customers."
            />
            <ReviewCard
              hasAction={false}
              image="https://generation-sessions.s3.amazonaws.com/56d13f1491cdc16344f770af03add974/img/image-8@2x.png"
              occupationClassName="review-card-instance"
              text="Omar Benseddik"
              text1="Co-founder @ Tinloof"
              text2="There are so many exciting combinations that PUMA can create with Sanity. Now that we have a structure, it’s infinitely scalable."
            />
          </div>
        </>
      )}

      {isMob && (
        <>
          <p className="text-wrapper">What people say about Etlyn</p>
          <ReviewCard
            className="instance-node"
            image="https://generation-sessions.s3.amazonaws.com/56d13f1491cdc16344f770af03add974/img/image-12@2x.png"
            text="Bettina Donmez"
            text1={
              <>
                E-Commerce Platform Development
                <br />
                PUMA
              </>
            }
            text2="We use Etlyn in every single one of our projects that requires content management. Our clients love it. Over the years we found out it covers so many use cases, be it a simple website, a web app, e-commerce or mobile app. It is easy and intuitive to use, makes content management enjoyable, and empowers marketers to work without constant involvement of designers and developers."
          />
          <ReviewCard
            className="instance-node"
            hasAction={false}
            image="https://generation-sessions.s3.amazonaws.com/56d13f1491cdc16344f770af03add974/img/image-10@2x.png"
            text="Ashley Brooks"
            text1={
              <>
                E-commerce Operations Manager @<br />
                AETHER Apparel
              </>
            }
            text2={
              <>
                Etlyn lets us say yes to our creative ideas.
                <br />
                I&#39;m so used to hearing, &#34;no, that&#39;s not possible
                <br />
                on this platform&#34;. Not anymore! It&#39;s an
                <br />
                awesome feeling and has really opened up
                <br />
                how we think about engaging with our
                <br />
                customers.
              </>
            }
          />
          <ReviewCard
            className="instance-node"
            hasAction={false}
            image="https://generation-sessions.s3.amazonaws.com/56d13f1491cdc16344f770af03add974/img/image-8@2x.png"
            occupationClassName="review-card-instance"
            text="Omar Benseddik"
            text1="Co-founder @ Tinloof"
            text2="There are so many exciting combinations that PUMA can create with Sanity. Now that we have a structure, it’s infinitely scalable."
          />
        </>
      )}
    </div>
  );
};
