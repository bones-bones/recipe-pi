import styled from '@emotion/styled';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStepInstructions } from './getStepInstructions';
import { selectActiveStep, selectSteps } from './selectors';
import { nextStep } from './store';

export const Steps = () => {
    const steps = useSelector(selectSteps) || [];
    const activeStep = useSelector(selectActiveStep);
    const refArray = useRef<HTMLLIElement[]>([]);

    const dispatch = useDispatch();

    useEffect(() => {
        const targetStep = refArray.current[activeStep];
        if (targetStep) {
            const targetRect = targetStep.getBoundingClientRect();
            console.log(targetStep);
            window.scroll({
                behavior: 'smooth',
                top: targetRect.top,
            });
        }
    }, [activeStep]);

    return (
        <Container>
            <button onClick={() => dispatch(nextStep())}>
                advance ({activeStep})
            </button>
            {steps.map((entry, i) => {
                return (
                    <Step
                        key={i}
                        ref={(ref) => ref && refArray.current.push(ref)}
                    >
                        {getStepInstructions(entry)}
                    </Step>
                );
            })}
        </Container>
    );
};

const Container = styled.ol();

const Step = styled.li({ height: '150px' });
