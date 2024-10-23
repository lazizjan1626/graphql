import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { Posts } from './entities/post.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsResolver } from './posts.resolver';
import { UsersResolver } from '../users/users.resolver';
import { UsersService } from '../users/users.service';
import { User } from '../users/entities/user.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Posts,User])],
  controllers: [PostsController],
  providers: [PostsService,PostsResolver,UsersService,UsersResolver],
})
export class PostsModule {}
