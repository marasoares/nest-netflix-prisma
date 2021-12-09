import { Test, TestingModule } from '@nestjs/testing';
import { FilmeController } from './filmes.controller';
import { FilmeService } from './filmes.service';

describe('FilmeController', () => {
  let controller: FilmeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FilmeController],
      providers: [FilmeService],
    }).compile();

    controller = module.get<FilmeController>(FilmeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
