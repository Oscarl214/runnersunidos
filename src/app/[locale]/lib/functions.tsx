'use server';
import prisma from '../../prisma';
import { S3Client, ListObjectsV2Command } from '@aws-sdk/client-s3';

const s3 = new S3Client({ region: `${process.env.AWS_REGION}` });

const folderPrefix = 'Images/';

export async function getBeerRunImages() {
  const command = new ListObjectsV2Command({
    Bucket: 'beerunevent',
    Prefix: folderPrefix,
  });
  //new
  try {
    const response = await s3.send(command);
    return (
      response.Contents?.map((file) => ({
        id: file.Key,
        imageUrl: `https://beerunevent.s3.amazonaws.com/${file.Key}`,
      })) || []
    );
  } catch (error) {
    console.error('Error fetching S3 images:', error);
    return [];
  }
}
// export async function getImages() {
//   const images = await prisma.images.findMany();
//   return images;
// }

export async function getCedarRidgeImages() {
  const command = new ListObjectsV2Command({
    Bucket: 'cedarridge',
    Prefix: folderPrefix,
  });
  try {
    const response = await s3.send(command);
    return (
      response.Contents?.map((file) => ({
        id: file.Key,
        imageUrl: `https://cedarridge.s3.amazonaws.com/${file.Key}`,
      })) || []
    );
  } catch (error) {
    console.error('Error fetching S3 images:', error);
    return [];
  }
}
export async function getGalleryImages() {
  const command = new ListObjectsV2Command({
    Bucket: 'galleryevent',
    Prefix: folderPrefix,
  });
  //new
  try {
    const response = await s3.send(command);
    return (
      response.Contents?.map((file) => ({
        id: file.Key,
        imageUrl: `https://galleryevent.s3.amazonaws.com/${file.Key}`,
      })) || []
    );
  } catch (error) {
    console.error('Error fetching S3 images:', error);
    return [];
  }
}

export async function getDiaImages() {
  const command = new ListObjectsV2Command({
    Bucket: 'diademuertosevent',
    Prefix: folderPrefix,
  });

  try {
    const response = await s3.send(command);
    return (
      response.Contents?.map((file) => ({
        id: file.Key,
        imageUrl: `https://diademuertosevent.s3.amazonaws.com/${file.Key}`,
      })) || []
    );
  } catch (error) {
    console.error('Error fetching S3 images:', error);
    return [];
  }
}

// export async function getBeerRunImages() {
//   const beerImages = await prisma.eventBeerRun.findMany();
//   return beerImages;
// }
export async function getPastEvents() {
  try {
    const pastevents = await prisma.pastEvents.findMany({
      orderBy: {
        date: 'desc',
      },
    });
    return pastevents;
  } catch (error) {
    console.error('Error fetching past events:', error);
    throw error;
  }
}

export async function getFutureEvents() {
  try {
    const futurevents = await prisma.futureEvents.findMany();
    return futurevents;
  } catch (error) {
    console.error('Error fetching future events:', error);
    throw error;
  }
}

export async function addUser(user: {
  name: string;
  email: string;
  lastName: string;
  about: string;
}) {
  try {
    const member = await prisma.user.findUnique({
      where: { email: user.email },
    });

    if (member) {
      throw new Error('User with this email already exists');
    }

    const newUser = await prisma.user.create({
      data: {
        email: user.email,
        name: user.name,
        lastName: user.lastName,
        about: user.about,
      },
    });

    return newUser;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
}
