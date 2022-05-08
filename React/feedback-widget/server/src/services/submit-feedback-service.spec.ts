import { SubmitFeedbackService } from "./submit-feedback-service"


const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackService(
    { create: createFeedbackSpy },
    { sendMail: sendMailSpy }
);


describe('SubmitFeedbakc', () => {
    it('should be able to submit a feedback', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'example comment',
            screenshot: 'data:image/png;base64,qewrqwerqer'
        })).resolves.not.toThrow();

        expect(createFeedbackSpy);
        expect(sendMailSpy);
    });

    it('should not be albe to submit feedback without type', async () => {
        await expect(submitFeedback.execute({
            type: '',
            comment: 'example comment',
            screenshot: 'data:image/png;base64,qewrqwerqer'
        })).rejects.toThrow();
    });

    it('should not be albe to submit feedback without comment', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: '',
            screenshot: 'data:image/png;base64,qewrqwerqer'
        })).rejects.toThrow();
    });

    it('should not be albe to submit feedback without an invalid screenshot', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'example comment',
            screenshot: 'teste.png'
        })).rejects.toThrow();
    });
})