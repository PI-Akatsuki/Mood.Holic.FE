package akatsuki.moodholic.service;

import akatsuki.moodholic.domain.DiaryMovie;
import akatsuki.moodholic.domain.Movie;

import java.util.List;

public interface MovieService {

    List<Movie> getAllMovies();

    List<DiaryMovie> findLikedDiaryMovies();

    List<String> findLikedMovieNames();

    List<Object[]> countMovieGenresWithLikes();

    List<DiaryMovie> getMemberLikedMovie(long memberId);

    Movie findByMovieName(String movieName);

    Movie saveMovie(Movie movie);
}
