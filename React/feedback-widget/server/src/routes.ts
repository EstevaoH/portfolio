import { PrismaFeedbacksRepostory } from './repositories/Prisma/prisma-feedbacks-repository';
import express from 'express';
import { SubmitFeedbackService } from './services/submit-feedback-service';
import { NodemailerAdapter } from './adapters/nodemailer/nodemailer-adapter';

export const routes = express.Router();



routes.post('/feedbacks', async (req, res) => {
    const { type, comment, screenshot } = req.body;

    const prismaFeedbacksRepostory = new PrismaFeedbacksRepostory();
    const nodemailerMailerAdapter = new NodemailerAdapter();
    const submitFeedbackService = new SubmitFeedbackService(
        prismaFeedbacksRepostory,
        nodemailerMailerAdapter
    );

    await submitFeedbackService.execute({
        type,
        comment,
        screenshot,
    })


    return res.status(201).send();
})