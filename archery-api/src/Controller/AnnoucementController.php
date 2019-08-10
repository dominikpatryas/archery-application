<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Announcement;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Flex\Response as SymfonyResponse;
use Symfony\Component\HttpFoundation\JsonResponse;

class AnnoucementController extends AbstractController
{
    /**
     * @Route("/announcement", name="announcement")
     */
    public function getAnnouncement()
    {
       $announcement = $this->getDoctrine()->getRepository(Announcement::class)->getAnnouncement();

       return new JsonResponse($announcement);
    }
}